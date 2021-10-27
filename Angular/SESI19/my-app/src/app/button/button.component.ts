import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  messageButton = '';
  @Output() newEventHandler = new EventEmitter<string>();
  @Output() newEventHandler2 = new EventEmitter();

  sendData(value :string){
    this.messageButton = 'DIKLIK';
    this.newEventHandler.emit(value);
  }

  decrease(){
    this.newEventHandler2.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
