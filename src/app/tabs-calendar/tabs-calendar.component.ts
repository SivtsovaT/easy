import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-calendar',
  templateUrl: './tabs-calendar.component.html',
  styleUrls: ['./tabs-calendar.component.css']
})
export class TabsCalendarComponent  {
  layout: string[];

  constructor() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date()
    this.layout = [...Array(8).keys()].map(i => days[(i + today.getDay()) % days.length]);
    this.layout[this.layout.length - 1] = "Last " + this.layout[this.layout.length - 1];

  }
}
