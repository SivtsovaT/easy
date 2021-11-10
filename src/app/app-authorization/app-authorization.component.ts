import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-authorization',
  templateUrl: './app-authorization.component.html',
  styleUrls: ['./app-authorization.component.css']
})
export class AppAuthorizationComponent implements OnInit {
  @Input() content?: string = 'Another sign up source'
  constructor() { }

  ngOnInit(): void {
  }

}
