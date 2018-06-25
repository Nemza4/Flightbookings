import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  firstname
  surname
  age 
  departure
  arrival
  date
  traveller
  
    constructor(private route:ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      this.route.queryParams.subscribe(params=>{
      this.firstname=params["firstname"];    
      this.surname=params["surname"];    
      this.age=params["age"];    
      this.departure=params["departure"];
      this.arrival=params["arrival"];  
      this.date=params["date"];
      this.traveller=params["traveller"]  ;  
      
      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.departure);
      console.log(this.arrival);
      console.log(this.date);
      console.log(this.traveller);
      
     
    })
}
}