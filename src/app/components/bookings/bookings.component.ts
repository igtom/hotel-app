import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  booking: Booking = {
    id: 1,
    name: 'Tom Martin',
    roomNumber: 187,
    startDate: new Date(),
    endDate: new Date('2021-09-21'),
  };

  constructor() {}

  ngOnInit(): void {}
}
