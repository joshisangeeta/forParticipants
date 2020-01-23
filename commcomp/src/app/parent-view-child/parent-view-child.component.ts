import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildLocalvComponent } from '../child-localv/child-localv.component';

@Component({
  selector: 'app-parent-view-child',
  templateUrl: './parent-view-child.component.html',
  styleUrls: ['./parent-view-child.component.css']
})
export class ParentViewChildComponent implements OnInit {

  @ViewChild(ChildLocalvComponent,{static:true})
    private timerComponent:ChildLocalvComponent;
  start() {this.timerComponent.start()}
  stop()   {this.timerComponent.stop()}
  constructor() { }

  ngOnInit() {
  }



}
