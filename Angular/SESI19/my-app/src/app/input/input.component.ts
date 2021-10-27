import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newInputHandler = new EventEmitter();

  sendInput(value :string){
    this.newInputHandler.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
