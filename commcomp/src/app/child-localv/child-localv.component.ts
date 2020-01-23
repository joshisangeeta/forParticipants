import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './child-localv.component.html',
  styleUrls: ['./child-localv.component.css']
})
export class ChildLocalvComponent implements OnInit {
   
    intervalId = 0;
    message = '';
    seconds = 11;
  constructor() { }
  ngOnInit() {
    this.start();
     }
   ngOnDestroy(){
     this.clearTimer();
   }
   clearTimer(){ clearInterval(this.intervalId)};
   start(){
       this.countDown();
   }
  stop(){
    this.clearTimer();
    this.message = `Holding at T- ${this.seconds} seconds`;
  }

  private countDown(){
    this.clearTimer();

     this.intervalId=   window.setInterval(()=>{
              this.seconds  -= 1;
               
              if(this.seconds===0){
                this.message = 'Blast Off';
              }
              else
              {
                 if(this.seconds <0) {this.seconds =10};
                 this.message = `T-${this.seconds} seconds and counting `
              }


        },1000);



  }





}
