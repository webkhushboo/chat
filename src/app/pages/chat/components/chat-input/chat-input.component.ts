import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  
  public newMessageText: string ='';
  constructor() { }

  ngOnInit() {
  }

  public submit(message: string) : void{

    // Todo save text to firebase backend
    console.log('New message', message);

    //reset the input
    this.newMessageText ='';
  }

}
