import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Input() name;
  @Input() page;


  @Input() firstname
  @Input() surname
  @Input() age 
  @Input() departure
  @Input() arrival
  @Input() date
  @Input() traveller

  constructor(private router:Router) { }

  ngOnInit() {
    
   

  }

  navigate(){
    
    if(this.name === 'display'){
      this.router.navigate(['etail/display'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller}}); 
    }else if(this.name === 'view'){
      this.router.navigate(['etail/view'],{queryParams:{firstname:this.firstname,surname:this.surname,age:this.age,departure:this.departure,arrival:this.arrival,date:this.date, traveller:this.traveller}}); 
    }
  }

}
