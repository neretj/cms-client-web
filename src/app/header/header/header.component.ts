import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public shoppingCartItems: CartItem[] = [];

  constructor(private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    $.getScript('assets/js/menu.js');
  }

  ngOnDestroy() {
  }

  openNav() {
    this.fix.addNavFix();
  }

  closeNav() {
    this.fix.removeNavFix();
  }

  /*// @HostListener Decorator
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0 >= 300) {
      this.document.getElementById('sticky').classList.add('fixed');
    } else {
      this.document.getElementById('sticky').classList.remove('fixed');
    }
  }*/

}
