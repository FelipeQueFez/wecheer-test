import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/route/app-routing.module';
import { AppComponent } from './app/presentation/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppLeftSideComponent } from './app/presentation/components/app-left-side/app-left-side.component';
import { AppRightSideComponent } from './app/presentation/components/app-right-side/app-right-side.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { EventListComponent } from './app/presentation/components/app-left-side/components/event-list/event-list.component';
import { EventListService } from './app/data/services/event-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLeftSideComponent,
    AppRightSideComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [
    provideAnimationsAsync(),
    EventListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
