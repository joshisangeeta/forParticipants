import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Car} from './car';
import { HttpClient } from '@angular/common/http';


@Injectable(

)
export class CardataService {
  url = 'http://localhost:8080/web/';
  constructor(private httpClient: HttpClient) {

  }

 addCar(car: Car): Observable <any>  {
        alert(car.price);
        const methodUrl = 'create';
        console.log("addcar");
        return  this.httpClient.post(this.url.concat(methodUrl) , car).map((res: Response) => res);
 }
  getListOfCars():Observable <any>{
     const methodurl = 'cars';
     return this.httpClient.get(this.url.concat(methodurl));


  }

  getCarById(carId:number): Observable <any>{
    const methodUrl = 'editCar/'+carId+'';

    return this.httpClient.get(this.url.concat(methodUrl));
  }

  editCar(car:Car) : Observable  <any>{
       let    carId  = car.id;
       const methodUrl = 'editCar/'+carId+'';
       return  this.httpClient.post (this.url.concat(methodUrl), car).map((res:Response) => res);
  }

  deleteCar(carId : number):Observable<any> {
          // console.log("carid" + carId);
          const methodurl:string = 'deletecars/'+carId+'' ;
         //   console.log(methodurl);
          return this.httpClient.get(this.url.concat(methodurl));




  }

}
