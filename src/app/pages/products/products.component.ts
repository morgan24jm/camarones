import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { Subscription } from 'rxjs';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  isMain?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: 1,
      title: 'Camarón congelado (entero o limpio)',
      image: 'assets/images/cc.jpeg',
      description: 'Puede ser entero o limpio, práctico para almacenamiento y uso prolongado.',
      price: 25.99,
      category: 'productos'
    },
    {
      id: 2,
      title: 'Camarón seco',
      image: 'assets/images/cc.png',
      description: 'Deshidratado para conservarse por más tiempo, comer en sopas y guisos.',
      price: 18.50,
      category: 'productos'
    },
    {
      id: 3,
      title: 'Camarón precocido o cocido',
      image: 'assets/images/cp.png',
      description: 'Listo para consumir o usar directamente en ensaladas, cocteles y otros platillos rápidos.',
      price: 32.00,
      category: 'productos'
    }
  ];

  cartItemCount = 0;
  private cartSubscription: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe(cart => {
      this.cartItemCount = cart.itemCount;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  addToCart(product: Product) {
    const cartItem: Omit<CartItem, 'quantity'> = {
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    };
    
    this.cartService.addToCart(cartItem);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}