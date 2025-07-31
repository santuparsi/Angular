import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
students:Student[]
constructor()
{
  //arry of students
  this.students=[
    {studentId:1,studentName:'Deepak',dob:new Date(2012,2,2),std:'V'},
    {studentId:2,studentName:'Druva',dob:new Date(2013,7,12),std:'IV'},
    {studentId:3,studentName:'Pavan',dob:new Date(2012,5,22),std:'V'},
    {studentId:4,studentName:'Isha',dob:new Date(2011,3,12),std:'VI'},
    {studentId:5,studentName:'Pooja',dob:new Date(2012,4,22),std:'V'},
  ];
}
}
