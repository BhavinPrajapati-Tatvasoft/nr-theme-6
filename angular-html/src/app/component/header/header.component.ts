import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleMenu() {
    document.body.classList.toggle('open-menu');
  }
  toggleSearch() {
    document.body.classList.toggle('open-search');
  }
  removeSearch() {
    document.body.classList.remove('open-search');
  }
}
