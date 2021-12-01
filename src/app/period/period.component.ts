import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  visibilityWeek:boolean = true;
  visibilityMonth:boolean = true;
  visibilityYear:boolean = true;
  isActive = false;
  isActiveOne = false;
  isActiveTwo = false;

  toggleWeek() {
    this.visibilityWeek = !this.visibilityWeek;

  }
  toggleMonth() {

    this.visibilityMonth = !this.visibilityMonth;

  }
  toggleYear() {

    this.visibilityYear = !this.visibilityYear;
  }
  changeClassW() {
    this.isActive = !this.isActive;
  }
  changeClassM() {
    this.isActive = !this.isActive;
  }
  changeClassY() {
    this.isActive = !this.isActive;
  }
  changeClassOne() {
    this.isActiveOne = true;
    this.isActiveTwo = false;
  }
  changeClassTwo() {
    this.isActiveOne = false;
    this.isActiveTwo = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
