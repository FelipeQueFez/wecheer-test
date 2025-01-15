import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EventItemModel } from '../models/event-item-model';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EventItemModel[]> {
    //TODO:review - use environment
    //var url = 'https://bxd49qhwtj.execute-api.eu-north-1.amazonaws.com';
    //var url = 'http://localhost:5000';
    var url = 'https://bxd49qhwtj.execute-api.eu-north-1.amazonaws.com';

    return this.http.get<EventItemModel[]>(`${url}/Events/all`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching event data', error);
          return throwError(() => new Error('Failed to fetch event data'));
        })
      );
  }
}
