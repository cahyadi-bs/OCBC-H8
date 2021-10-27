import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  title = 'my-app';
  test = 'none';
  value = '';
  username = '';
  fullName: string = "Hello JavaTpoint"; 
  
  getItem(item:string){
    this.counter++;
    this.test = `BUTTON SUDAH DI KLIK ${this.counter}x`;
    this.value = item;
  }

  decreaseCounter(){
    this.counter--;
    this.test = `BUTTON SUDAH DI KLIK ${this.counter}x`;
  }

  getInput(value:string){
    this.value = value;
  }
}
