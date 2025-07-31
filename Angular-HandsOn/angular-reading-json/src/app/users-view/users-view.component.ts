import { Component, OnInit } from '@angular/core';
import * as userData from '../users.json'
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
users:any=userData;
  constructor() {
    this.users=this.users.default //converts json file data into javascript object;
   }

  ngOnInit(): void {
  }

}
