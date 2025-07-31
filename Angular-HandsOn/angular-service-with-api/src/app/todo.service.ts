import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  //service methods
  GetTodos():Observable<Todo[]> //Get All todos
  {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  GetTodoById(id:number):Observable<Todo>
  {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/'+id);
  }
  AddTodo(todo:Todo):Observable<any> //add todo
  {
    return this.http.post('https://jsonplaceholder.typicode.com/todos/',todo);
  }
  EditTodo(todo:Todo):Observable<any> //edit todo
  {
    return this.http.put('https://jsonplaceholder.typicode.com/todos/',todo);
  }
  DeleteTodo(id:number):Observable<any> //delete todo by id
  {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+id);
  }
}

