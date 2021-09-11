import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { bookings } from '../../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.route.snapshot.paramMap.get('id'));
      let bookingById = bookings.find((booking) => booking.id === id)!;
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = bookings.find((x) => x.id === this.booking.id);

    if (!bookingById) {
      bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean) {
    let val = (event.target as HTMLInputElement).value;
    isStart
      ? (this.booking.startDate = new Date(val))
      : (this.booking.endDate = new Date(val));
  }
}
