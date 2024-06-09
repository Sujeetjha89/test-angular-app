import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
isCollapsed: any;

  constructor() { }

  ngOnInit() { }

}
