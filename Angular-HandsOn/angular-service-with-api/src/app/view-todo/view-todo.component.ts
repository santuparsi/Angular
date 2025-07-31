import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
id:number;
todo:Todo;
  constructor(private http:TodoService) {
    //get id value from localstorage(which is set in demo component)
    this.id=localStorage['Id'];
    console.log(this.id);
    this.http.GetTodoById(this.id).subscribe(res=>{
      this.todo=res;
      console.log(this.todo);
    })
   }

  ngOnInit(): void {
  }

}
