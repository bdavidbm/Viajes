import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/Flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private url:string = 'https://recruiting-api.newshore.es/api/flights/0'

  constructor(
    private http: HttpClient
  ) { }

  getFlight(): Observable<Flight[]>{
    return this.http.get<Flight[]>(this.url);
  }
}
