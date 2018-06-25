import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
firstname
surname
age 
departure
arrival
date
traveller

constructor(private router:Router) { }

  ngOnInit() {
    
  }

  booking(){
    //sending parameteres to another page
    this.router.navigate(['etail'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller}});
    console.log(this.firstname);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.departure);
    console.log(this.arrival);
    console.log(this.date);
    console.log(this.traveller);
    alert("Flight booked");
  }
}
