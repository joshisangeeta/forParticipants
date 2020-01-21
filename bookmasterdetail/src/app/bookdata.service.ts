import { Injectable } from '@angular/core';
import { BOOKS } from './bookstore';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {

  constructor() { }
 
  getBooks(){

  
      return BOOKS;
  
  }

  getBook(id:number): Book{

        for(var idx in BOOKS){
           if(BOOKS[idx].id==id){break;}

        }
        return(BOOKS[idx]);
    
  }




  

}
