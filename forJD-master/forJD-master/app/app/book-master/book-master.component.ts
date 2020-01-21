import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { BOOKS } from '../bookstore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css'],
   providers:[BookDataService]
})
export class BookMasterComponent implements OnInit {

  books:Book[];
  selectedBook:Book;
  
  constructor(private booksService:BookDataService) {
  
       this.books = booksService.getBooks();
   }

  ngOnInit() {
  }
  
  selectBook(book){
    
    this.selectedBook=book;
    
  }
  

}
