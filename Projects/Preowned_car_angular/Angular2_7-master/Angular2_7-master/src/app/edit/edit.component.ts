import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CardataService } from '../cardata.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   updateCar:Car = new Car();
   carId:number;
   updatedCar:Car = new Car();
   cars:Car[];
   edited:boolean = false;


  constructor(private dataService: CardataService ,private route:ActivatedRoute ) { }

  ngOnInit() {

        this.route.params.subscribe(params => this.carId = params[ 'id' ]);
        this.dataService.getCarById(this.carId).subscribe(car => this.updateCar = car);  

  }

  editCar(){
         
         this.dataService.editCar(this.updateCar).subscribe(car =>this.updatedCar =car );
         this.edited = true;


  }


}
