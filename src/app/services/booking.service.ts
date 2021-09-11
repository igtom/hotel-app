import { Injectable } from '@angular/core';
import { bookings } from '../mock-bookings';
import { Booking } from '../models/booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  bookingsUrl: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl);
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    return this.http.delete<Booking>(`${this.bookingsUrl}/${booking.id}`);
  }

  getBookingById(id: Number): Observable<Booking> {
    return this.http.get<Booking>(`${this.bookingsUrl}/${id}`);
  }

  addBooking(booking: Booking): void {
    bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    // let currentBooking = this.getBookingById(booking.id);
    //  currentBooking = booking;
  }
}
