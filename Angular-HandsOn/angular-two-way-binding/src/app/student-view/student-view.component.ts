import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
obj:Student;
students:Student[]=[];
  constructor() {
    this.obj=new Student()
   }

  ngOnInit(): void {
  }
  Save():void{
    //save the new student details to the array
    console.log(this.obj);
    this.students.push(this.obj);
    console.log(this.students);
    this.obj=new Student();
  }

}
