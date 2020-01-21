import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { BooksCompComponent } from './books-comp/books-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    BooksCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
