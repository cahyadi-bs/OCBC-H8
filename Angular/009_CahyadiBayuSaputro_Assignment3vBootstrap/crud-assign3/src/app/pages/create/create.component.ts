import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  submitted = false;

  form!:FormGroup 

  get title(){
    return this.form.get('title')
  }
  get firstName(){
    return this.form.get('firstName')
  }
  get lastName(){
    return this.form.get('lastName')
  }
  get email(){
    return this.form.get('email')
  }
  get role(){
    return this.form.get('role')
  }
  get password(){
    return this.form.get('password')
  }
  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  get f(){
    return this.form.controls;
  }


  constructor(
    public userService:UserService,
    private router:Router
    ) {
      
    }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required, Validators.minLength(6)
      ])
    });
  }

  submit(){
    this.submitted = true;
    
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
        console.log('Post created successfully!');
        this.router.navigateByUrl('home');
    })
    
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }



}
