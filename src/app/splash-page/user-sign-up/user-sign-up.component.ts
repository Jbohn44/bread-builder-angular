import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../models/user-sign-up.model';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  userSignUp: UserSignUp;
  passwordCheck: string;
  constructor() { }

  ngOnInit() {
    // maybe init these in class properties section?
    this.userSignUp = {UserName: '', Email: '', Password: ''};
    this.passwordCheck = '';
  }

}
