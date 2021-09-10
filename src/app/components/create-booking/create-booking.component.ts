import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { bookings } from '../../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = {
    id: 314,
    name: '',
    roomNumber: 220,
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  save(): void {
    bookings.push(this.booking);
    this.router.navigate(['bookings']);
  }
}
