import { Component } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number = '+1-647-207-2216';
  faPhoneAlt = faPhoneAlt;
}
