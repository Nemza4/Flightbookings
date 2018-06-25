import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etail',
  templateUrl: './etail.component.html',
  styleUrls: ['./etail.component.css']
})
export class EtailComponent implements OnInit {
firstname
surname
age 
departure
arrival
date
traveller

  pages = [
    {name: 'display', page: 'display'},
    {name: 'view', page: 'view'}
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

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