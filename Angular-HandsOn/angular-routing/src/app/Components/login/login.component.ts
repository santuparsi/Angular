import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: User[] = [];
  email: string = '';
  password: string = '';
  user?: User;
  errMsg: string = '';
  //router:Router=new Router();
  constructor(public router: Router) {
    this.users = [
      { name: 'Abhishek', email: 'abhi@gmail.com', password: '12345' },
      { name: 'Pooja', email: 'pooja@gmail.com', password: '12345' },
      { name: 'Nandhini', email: 'nandhini@gmail.com', password: '12345' },
    ];
  }
  Validate() {
    console.log(this.email);
    console.log(this.password);

    this.user = this.users.find(
      (u) => u.email == this.email && u.password == this.password
    );
    console.log(this.user);
    if (this.user != null) {
      this.router.navigateByUrl('user-dashboard'); //navigate to user-dashboard route
    } else {
      this.errMsg = 'Invalid Credentials';
    }
  }
}
