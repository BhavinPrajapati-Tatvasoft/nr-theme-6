import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  removeMenu() {
    document.body.classList.remove('open-menu');
  }
  toggleSubMenu(event: any) {
    event.preventDefault(); // Prevent the default action of the link
    var parentLi = event.target.closest('.nav-item'); // Find the closest parent li element
    if (parentLi.classList.contains('has-submenu')) {
      parentLi.classList.toggle('open'); // Toggle the 'open' class on the parent li
    }
  }
}
