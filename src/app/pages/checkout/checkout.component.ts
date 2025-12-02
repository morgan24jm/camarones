import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService, CartItem, Cart } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [], total: 0, itemCount: 0 };
  showMobileMenu = false;
  private cartSubscription: Subscription = new Subscription();
  
  get subtotal(): number {
    return this.cart.total;
  }
  
  get shipping(): number {
    return 65; // Fixed shipping cost
  }
  
  get total(): number {
    return this.subtotal + this.shipping;
  }

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  updateQuantity(item: CartItem, newQuantity: number) {
    this.cartService.updateQuantity(item.id, newQuantity);
  }

  removeItem(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  proceedToPayment() {
    if (this.cart.items.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    this.router.navigate(['/confirmacion']);
  }

  goBack() {
    this.router.navigate(['/productos']);
  }
}