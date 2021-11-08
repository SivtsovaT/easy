import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration_condition: boolean = false;
  successful_condition: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.registration_condition = true;
    }, 2000)
    setTimeout(()=> {
      this.successful_condition = true;
    }, 3000)
  }

}
