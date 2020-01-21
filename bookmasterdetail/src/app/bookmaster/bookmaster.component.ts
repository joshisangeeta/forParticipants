import { Component, OnInit } from '@angular/core';
import { BookdataService } from '../bookdata.service';
import { Book } from '../book';

@Component({
  selector: 'app-bookmaster',
  templateUrl: './bookmaster.component.html',
  styleUrls: ['./bookmaster.component.css']
})
export class BookmasterComponent implements OnInit {
    books:Book[];
    selectedBook: Book;
  constructor(private dataService:BookdataService) {
      this.books = dataService.getBooks();

   }

  ngOnInit() {
  }

}
