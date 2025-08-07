import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  submit(form: any) {
    let firstName = form.firstName;
    console.log(firstName);

    let lastName = form.lastName;
    console.log(lastName);

    let comment = form.comment;
    console.log(comment);
  }
}
