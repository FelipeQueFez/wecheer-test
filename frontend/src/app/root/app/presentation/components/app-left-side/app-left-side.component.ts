import { Component, Input } from '@angular/core';
import { EventItemModel } from '../../../data/models/event-item-model';

@Component({
  selector: 'app-left-side',
  standalone: false,

  templateUrl: './app-left-side.component.html',
  styleUrl: './app-left-side.component.scss'
})
export class AppLeftSideComponent {
  @Input() events: EventItemModel[] = [];
  @Input() error: string | null = null;
  @Input() countdown: number = 5; // Timer for the 5-second countdown
}
