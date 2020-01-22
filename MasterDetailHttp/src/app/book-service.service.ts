import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

       getBooks():Observable<any>{
         return this.http.get('http://localhost:8080/books');
       }
       
       getBookById(id:number):Observable <any>{
        return this.http.get('http://localhost:8080/books/id');
       }


}
