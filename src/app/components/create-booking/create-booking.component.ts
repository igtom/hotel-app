import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = {
    id: 5,
    name: 'Your Name',
    roomNumber: 220,
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}
