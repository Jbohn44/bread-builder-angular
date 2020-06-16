import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserLogin } from '../models/user-login.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userModel: UserLogin = {UserName: '', Password: ''};
  constructor() { }

  ngOnInit() {
    
  }

}
