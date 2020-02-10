import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import {CardataService} from '../cardata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  added:boolean = false;
  car:Car=new Car();

  constructor(private carService:CardataService,private router: Router) { }


    submitCar(){

    let car1 = this.carService.addCar(this.car).subscribe(car=>this.car=car);

    if(car1 != null){
    alert("Car Details Added Successfully"+car1);
    this.added = true;
       
      }
   //  alert("Car Details Adding Failed");
     }

  ngOnInit() {
  }

}
