import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DemoComponent } from './demo/demo.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';

const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'view-todo',component:ViewTodoComponent},
  {path:'add-todo',component:AddTodoComponent},
  {path:'emp-view',component:EmployeeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
