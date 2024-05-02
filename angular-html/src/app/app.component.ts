import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-html';
  ngOnInit() {
    window.addEventListener('load', Aos.refresh);

    window.addEventListener('load', function () {});
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}
