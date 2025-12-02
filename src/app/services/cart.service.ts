import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>({
    items: [],
    total: 0,
    itemCount: 0
  });
  
  public cart$ = this.cartSubject.asObservable();

  constructor() {
    // Cargar carrito desde localStorage al inicializar
    this.loadCartFromStorage();
  }

  // Agregar producto al carrito
  addToCart(product: Omit<CartItem, 'quantity'>): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.items.find(item => item.id === product.id);

    if (existingItem) {
      // Si ya existe, incrementar cantidad
      existingItem.quantity += 1;
    } else {
      // Si no existe, agregar nuevo item
      currentCart.items.push({ ...product, quantity: 1 });
    }

    this.updateCart(currentCart);
  }

  // Remover producto del carrito
  removeFromCart(productId: string): void {
    const currentCart = this.cartSubject.value;
    currentCart.items = currentCart.items.filter(item => item.id !== productId);
    this.updateCart(currentCart);
  }

  // Actualizar cantidad de un producto
  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const currentCart = this.cartSubject.value;
    const item = currentCart.items.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      this.updateCart(currentCart);
    }
  }

  // Limpiar carrito
  clearCart(): void {
    this.updateCart({ items: [], total: 0, itemCount: 0 });
  }

  // Obtener carrito actual
  getCurrentCart(): Cart {
    return this.cartSubject.value;
  }

  // Verificar si el carrito está vacío
  isEmpty(): boolean {
    return this.cartSubject.value.items.length === 0;
  }

  // Obtener cantidad de un producto específico
  getItemQuantity(productId: string): number {
    const item = this.cartSubject.value.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  }

  // Calcular totales y actualizar carrito
  private updateCart(cart: Cart): void {
    cart.itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.total = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    this.cartSubject.next(cart);
    this.saveCartToStorage(cart);
  }

  // Guardar carrito en localStorage
  private saveCartToStorage(cart: Cart): void {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Cargar carrito desde localStorage
  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        this.cartSubject.next(cart);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
      }
    }
  }
}
