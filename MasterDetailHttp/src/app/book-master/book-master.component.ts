import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-master',
  templateUrl: './book-master.component.html',
  styleUrls: ['./book-master.component.css']
})
export class BookMasterComponent implements OnInit {
    books:Book[];
  constructor(private router:Router,private booksService:BookServiceService) { }

  ngOnInit() {

      this.booksService.getBooks().subscribe(books=>this.books=books);

  }
  
  selectBook(book:Book){
    this.router.navigate(['/detail', book.id]);
  }
   





}
