import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentLocalvComponent } from './parent-localv/parent-localv.component';
import { ChildLocalvComponent } from './child-localv/child-localv.component';
import { ParentViewChildComponent } from './parent-view-child/parent-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentLocalvComponent,
    ChildLocalvComponent,
    ParentViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
