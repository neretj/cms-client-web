import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './navbar-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menuItems: Menu[];
  public toggleNavBar = false;

  constructor() { }

  ngOnInit() {
    this.menuItems = MENUITEMS.filter(menuItem => menuItem);
  }

  toggleNav() {
    this.toggleNavBar = !this.toggleNavBar;
  }

}
