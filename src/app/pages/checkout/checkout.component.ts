import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  quantity = 23;
  pricePerKg = 18.91;
  showMobileMenu = false;
  
  get subtotal(): number {
    return Math.round(this.quantity * this.pricePerKg);
  }
  
  get total(): number {
    return this.subtotal + 65; // Shipping and taxes
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  proceedToPayment() {
    // Navigate to confirmation page
    window.location.href = '/confirmacion';
  }
}