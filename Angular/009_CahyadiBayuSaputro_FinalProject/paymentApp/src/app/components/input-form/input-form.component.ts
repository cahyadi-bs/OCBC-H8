import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  submitted = false;

  inputForm = new FormGroup({
    cardOwnerName: new FormControl('', [
      Validators.required
    ]),
    cardNumber: new FormControl('', [
      Validators.required
    ]),
    securityCode: new FormControl('', [
      Validators.required
    ]),
    expirationDate: new FormControl('', [
      Validators.required
    ]),
  })

  get f(){
    return this.inputForm.controls;
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.inputForm.value);
  }

}
