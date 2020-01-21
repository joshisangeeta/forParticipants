import { Component, OnInit } from '@angular/core';
import { Book, BOOKSTORE } from '../book';

@Component({
  selector: 'app-books-comp',
  templateUrl: './books-comp.component.html',
  styleUrls: ['./books-comp.component.css']
})
export class BooksCompComponent implements OnInit {
    
    books:Book[];

  constructor() {this.books = BOOKSTORE}

  ngOnInit() {
  }

}
