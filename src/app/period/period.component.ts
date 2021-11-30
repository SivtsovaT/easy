import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  visibility:boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
