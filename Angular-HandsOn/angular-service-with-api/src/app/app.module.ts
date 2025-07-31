import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodoService } from './todo.service';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewTodoComponent,
    AddTodoComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
