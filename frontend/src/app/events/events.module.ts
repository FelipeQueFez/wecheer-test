import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventListService } from './event-list/event-list.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    EventListComponent
  ],
  providers: [
    EventListService
  ],
})
export class EventsModule { }
