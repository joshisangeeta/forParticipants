import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import {CardataService } from '../cardata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cars: Car[];

  constructor(private dataService: CardataService ) {

  }

  ngOnInit() {

     this.dataService.getListOfCars().subscribe(cars => this.cars = cars);
  }

   deleteCarDetails(carId: number) {
     console.log("hi");
    this.dataService.deleteCar(carId).subscribe(cars=>this.cars=cars);
   }





}
