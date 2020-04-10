import { Component, OnInit } from '@angular/core';
import { LandingFixService } from '../../../../services/landing-fix.service';
import { CartItem } from '../../../../classes/cart-item';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-topbar-two',
  templateUrl: './topbar-two.component.html',
  styleUrls: ['./topbar-two.component.scss']
})
export class TopbarTwoComponent implements OnInit {

  public shoppingCartItems: CartItem[] = [];

  constructor(private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() { }

  openNav() {
    this.fix.addNavFix();
  }

}
