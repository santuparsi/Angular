import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employees:Employee[];
  employee:Employee;
  constructor(private employeeService:EmployeeService) { 
    this.employee=new Employee();
    employeeService.GetEmployees().subscribe(res=>{
      this.employees=res;
      console.log(this.employees);
    })
  }

  ngOnInit(): void {
  }
  Save()
  {
    this.employeeService.AddEmployee(this.employee).subscribe(res=>{
      console.log(res);
    })
    this.employee=new Employee();
  }
  Searech()
  {
    let id=this.employee.employeeId;
    this.employeeService.GetEmployee(id).subscribe(res=>{
      let item:Employee=res;
      this.employee.employeeId=item.employeeId;
      this.employee.employeeName=item.employeeName;
      this.employee.salary=item.salary;
      this.employee.joinDate=item.joinDate;
    })
  }
  Delete(id:number)
  {
    this.employeeService.DeleteEmployee(id).subscribe(res=>{
      console.log(res);
    })
  }
  Edit()
  {
    this.employeeService.EditEmployee(this.employee).subscribe(res=>{
      console.log(res);
    })
  }

}
