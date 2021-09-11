import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private fb: FormBuilder
  ) {}
  booking: Booking = {
    id: Math.floor(Math.random() * 10000),
    name: '',
    roomNumber: Math.floor(Math.random() * 100),
    startDate: new Date(),
    endDate: new Date(),
  };

  bookingForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.compose([Validators.required])],
    roomNumber: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.route.snapshot.paramMap.get('id'));
      this.bookingService.getBookingById(id).subscribe((data) => {
        this.booking = data;

        this.bookingForm.setValue({
          id: this.booking.id,
          name: this.booking.name,
          roomNumber: this.booking.roomNumber,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate,
        });
      });
    }
  }

  save(): void {
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean) {
    let val = (event.target as HTMLInputElement).value;
    isStart
      ? (this.booking.startDate = new Date(val))
      : (this.booking.endDate = new Date(val));
  }
}
