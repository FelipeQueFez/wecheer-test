import { Component, Input } from '@angular/core';
import { EventItemModel } from '../../../data/models/event-item-model';

@Component({
  selector: 'app-right-side',
  standalone: false,

  templateUrl: './app-right-side.component.html',
  styleUrl: './app-right-side.component.scss'
})
export class AppRightSideComponent {
  @Input() events: EventItemModel[] = [];
}
