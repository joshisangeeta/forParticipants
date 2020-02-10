import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:Book[];
  constructor(private router:Router,private booksService:BookServiceService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books=>this.books=books);
    }




    
   getAllBooks(){
     this.booksService.getBooks().subscribe(books=>this.books=books);
   } 

}
