import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './chat.html',
  styles: [
    `
    .chat{
        background: #A2CD5A;
        height: 100px;
        width: 30%;
        float: left;
        box-sizing: border-box;
      
      }
    `
  ]
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}