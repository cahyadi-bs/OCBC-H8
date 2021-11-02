import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  signInForm = new FormGroup({
    password: new FormControl('', [
      Validators.required, Validators.minLength(5)
    ]),
    email: new FormControl('', [
      Validators.required,Validators.email
    ])
  })

  get password(){
    return this.signInForm.get('password');
  }
  get email(){
    return this.signInForm.get('email');
  }

  signIn(){
    this.authService.signIn(this.signInForm.value)
  }

}
