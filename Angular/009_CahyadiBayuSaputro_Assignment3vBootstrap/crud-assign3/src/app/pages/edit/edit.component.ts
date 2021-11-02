import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  submitted = false;

  form!:FormGroup 
  id!: number;
  user!:User;
  
  get f(){
    return this.form.controls;
  }

  constructor(
    public userService:UserService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['userId'];
      this.userService.find(this.id).subscribe((data: User)=>{
      this.user = data;
      
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
        // password: new FormControl('', [
        //   Validators.required, Validators.minLength(6)
        // ]),
        // confirmPassword: new FormControl('', [
        //   Validators.required, Validators.minLength(6)
        // ])
      });

    });
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return
    }
    console.log(this.form.value);
    this.userService.update(this.id, this.form.value).subscribe(res => {
        console.log('Post updated successfully!');
        this.router.navigateByUrl('home');
    })
  }

}
