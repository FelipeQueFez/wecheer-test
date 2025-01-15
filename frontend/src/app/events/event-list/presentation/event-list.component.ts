import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, switchMap } from 'rxjs';
import { EventListService } from '../data/services/event-list.service';
import { EventItemModel } from '../data/models/event-item-model';

@Component({
  selector: 'event-list',
  standalone: false,

  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit, OnDestroy {
  events: EventItemModel[] = [];
  error: string | null = null;
  countdown: number = 5; // Timer for the 5-second countdown
  private subscription: Subscription = new Subscription();
  private timerSubscription: Subscription = new Subscription();

  constructor(private eventListService: EventListService) { }

  ngOnInit(): void {
    // Fetch data immediately and reset the timer
    this.fetchData();
    this.startCountdown();

    // Refresh data every 5 seconds
    this.subscription = interval(5000)
      .pipe(
        switchMap(() => {
          this.countdown = 5; // Reset countdown
          return this.eventListService.getAll();
        })
      )
      .subscribe({
        next: (data) => {
          this.events = data;
        },
        error: (err) => {
          console.error('Error fetching data:', err);
          this.error = 'Failed to fetch data.';
        },
      });
  }

  fetchData(): void {
    this.eventListService.getAll().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.error = 'Failed to fetch data.';
      },
    });
  }

  startCountdown(): void {
    // Update the countdown every second
    this.timerSubscription = interval(1000).subscribe(() => {
      this.countdown -= 1;
      if (this.countdown <= 0) {
        this.countdown = 5; // Reset countdown when it reaches 0
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to avoid memory leaks
    this.subscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}