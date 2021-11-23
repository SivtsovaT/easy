import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {getHours} from 'date-fns';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate = new Date();
  showMarker = true;
  dayStartHour = Math.max(0, getHours(new Date()) - 2);

  dayEndHour = Math.min(23, getHours(new Date()) + 2);

  constructor() { }

  ngOnInit(): void {
  }

}
