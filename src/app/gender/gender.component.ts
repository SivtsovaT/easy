import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  isActive = true;
  constructor() { }
  changeClass() {
    this.isActive = !this.isActive
  }

  ngOnInit(): void {
  }

}
