import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private messageService : MessageService) { };

  sendMessage():void {this.messageService.sendMessage("Message from Home comp to App Comp");}
  
  clearMessage():void {
    this.messageService.clearMessage();
  }
  
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

}
