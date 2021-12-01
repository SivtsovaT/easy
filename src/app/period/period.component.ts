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

  toggleWeek() {
    this.visibilityWeek = !this.visibilityWeek;

  }
  toggleMonth() {

    this.visibilityMonth = !this.visibilityMonth;

  }
  toggleYear() {

    this.visibilityYear = !this.visibilityYear;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
