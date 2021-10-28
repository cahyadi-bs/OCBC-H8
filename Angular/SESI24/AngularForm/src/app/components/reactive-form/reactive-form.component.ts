import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  currentUser:{
    isLogin:boolean,
    username:string,
    password: string 
  } = {isLogin:false, username: '', password: ''}

  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ])
  })



  constructor() { }

  ngOnInit(): void {
  }
  errors:any = {username:{}};
  isSubmitted = false;

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onLogin(){
    this.isSubmitted=true;
    // console.log(this.loginForm);

    // this.currentUser = {
    //   isLogin: true,
    //   username: this.loginForm.value.username,
    //   password: this.loginForm.value.password
    // }
  }

  isValidate(){
    if(this.username?.invalid){
      this.errors.username = {...this.username.errors}
    }
  }
  handleIsSubmittedState(){
    if(this.isSubmitted === true){
      this.isSubmitted = false;
    }
  }
}
