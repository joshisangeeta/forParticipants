import { Book } from './book';
import { BOOKS } from './bookstore';
import { Injectable } from '@angular/core';

@Injectable()
export class BookDataService {
   
  constructor() { 
    
  }
   getBooks()
   {
     return BOOKS;
   }

}
