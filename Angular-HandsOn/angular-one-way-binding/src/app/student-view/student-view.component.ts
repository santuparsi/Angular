import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent {
//instantiate student object
obj:Student;
constructor()
{
  //initialize the student data
  this.obj=new Student();
  this.obj.studentId=443;
  this.obj.studentName='Rohan';
  this.obj.dob=new Date(2013,2,20); //yy-mm-dd
  this.obj.std='III';
}
}
