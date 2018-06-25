import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EtailComponent } from './etail/etail.component';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewComponent,
    EventsComponent,
    NavbarComponent,
    EtailComponent,
    DisplayComponent,
    AboutComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
