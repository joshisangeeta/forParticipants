import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book:Book;
id1:number;
private sub:any;
  constructor(private bookService:BookServiceService,
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit() {

    this.sub= this.route.params.subscribe(params=>{
      this.id1=+params['id'];    //(+) converts string 'id'to a number
       this.bookService.getBookById(this.id1).subscribe(book=>this.book=book);
 });
  
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
    }
    
    goBack():void{
    this.location.back();
    }

}









 **//