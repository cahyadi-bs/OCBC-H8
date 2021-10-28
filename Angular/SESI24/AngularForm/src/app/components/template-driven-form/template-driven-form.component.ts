import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  tasks:Task[] = [];
  categories = ['School', 'Work', 'Hobby' ]

  constructor() { }

  ngOnInit(): void {
  }

  handleFormonSubmit(form : NgForm){
      const {taskName, category} = form.value;
      // this.tasks = [...this.tasks,new Task(taskName,"incomplete",category)];
      this.tasks.push(new Task(taskName,"incomplete",category))
      form.reset();
  }


}
