import { Injectable } from '@angular/core';
import { bookings } from '../mock-bookings';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}

  getBookings(): Booking[] {
    return bookings;
  }

  deleteBooking(booking: Booking): void {
    let index = bookings.indexOf(booking);
    bookings.splice(index, 1);
  }

  getBookingById(id: Number): Booking {
    let bookingById = bookings.find((booking) => booking.id === id)!;
    return bookingById;
  }

  addBooking(booking: Booking): void {
    bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
