import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
