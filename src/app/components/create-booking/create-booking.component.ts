import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.route.snapshot.paramMap.get('id'));
      let bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }
  }

  save(): void {
    let bookingById = this.bookingService.getBookingById(this.booking.id);

    if (!bookingById) {
      this.bookingService.addBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
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
