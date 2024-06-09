import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrls: []
})
export class WelcomeComponent implements OnInit {
isCollapsed: any;

  constructor() { }

  ngOnInit() { }

}
