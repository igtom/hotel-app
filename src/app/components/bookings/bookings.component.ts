import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { bookings } from '../../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = bookings;

  constructor() {}

  ngOnInit(): void {}

  deleteBooking(booking: Booking): void {
    var index = bookings.indexOf(booking);
    bookings.splice(index, 1);
  }
}
