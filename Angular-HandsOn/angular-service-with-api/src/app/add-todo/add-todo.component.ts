import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
todo:Todo
  constructor(private todoService:TodoService) {
    this.todo=new Todo();
   }

  ngOnInit(): void {
  }
  Save() //Add new todo
  {
    //calling AddTodo service method to add the new todo details 
    this.todoService.AddTodo(this.todo).subscribe(res=>{

    })
  }

}
