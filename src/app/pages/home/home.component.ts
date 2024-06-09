import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css',
  template:''
})
export class HomeComponent {
  title = 'Instantpay India Limited';

}
