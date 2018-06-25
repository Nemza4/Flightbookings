import { Component } from '@angular/core';
import { ViewComponent } from "./view/view.component";
import { BookingComponent } from './booking/booking.component';
import { EtailComponent } from './etail/etail.component';
import { DisplayComponent } from './display/display.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const AppRoutes=[
    
    {path:'events',component:EventsComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path: 'booking',component:BookingComponent},
    {path: 'etail',component:EtailComponent, children: [
        {path: 'display',component:DisplayComponent},
        {path: 'view',component:ViewComponent},
     
    ]},
    
];


     

