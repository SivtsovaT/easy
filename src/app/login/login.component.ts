import { Component, OnInit } from '@angular/core';
export class User {
  constructor(public email: string,
              public password: string) {

  }

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User('', '');
  addUser() {
    console.log(this.user);
  }


  constructor() { }

  ngOnInit(): void {


  }

}
