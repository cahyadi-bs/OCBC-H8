import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  inputTodo:string = "";
  isSubmitted = false;

  todoForm = new FormGroup({
    taskName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ])
  });

  
  constructor() { }

  ngOnInit(): void {
  }

  handlerTodoForm(){
    this.isSubmitted=true;
    console.log(this.todoForm)
    if(this.todoForm.status === "VALID"){
      this.addTodo(this.todoForm.value.taskName);
      //console.log(this.todoForm.value.taskName);
      this.todoForm.reset();
    }
  }

  handleIsSubmittedState(){
    if(this.isSubmitted === true){
      this.isSubmitted = false;
    }
  }

  get taskName(){
    return this.todoForm.get('taskName')
  }

  addTodo(todoItem : string){
    const todo:Todo = {
      content: todoItem,
      completed: false
    }
    this.newTodoEvent.emit(todo);
    this.isSubmitted=false;
  }

  
}
