import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "../Template/login/login";
import { Feedback } from "../Template/feedback/feedback";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Feedback],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-forms');
}
