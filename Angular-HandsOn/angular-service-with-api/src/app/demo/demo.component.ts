import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
todos:Todo[];
  constructor(private todoService:TodoService,private router:Router) { 
    //assign todo data to todos variable using subscribe method
    this.todoService.GetTodos().subscribe(res=>{
      this.todos=res;
      console.log(this.todos);
    })
  }

  ngOnInit(): void {
  }
  GetId(id:number)
  {
    localStorage['Id']=id;
    this.router.navigateByUrl('view-todo');

  }

}
