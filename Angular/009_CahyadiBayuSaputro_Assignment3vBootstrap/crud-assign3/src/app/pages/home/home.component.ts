import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(public userService:UserService) { }

  ngOnInit(): void {
      this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }

  deletePost(id:any){
    this.userService.delete(id).subscribe(res => {
        this.users = this.users.filter(item => item.id !== id);
        console.log('Post deleted successfully!');
    })

  }

}
