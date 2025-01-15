import { Component, Input } from '@angular/core';
import { EventItemModel } from '../../../../../data/models/event-item-model';

@Component({
  selector: 'event-list',
  standalone: false,

  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  @Input() events: EventItemModel[] = [];
  @Input() error: string | null = null;
  @Input() countdown: number = 5; // Timer for the 5-second countdown
}