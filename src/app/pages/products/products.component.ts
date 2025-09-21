import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  isMain?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Camarón congelado (entero o limpio)',
      image: 'assets/images/cc.jpeg',
      description: 'Puede ser entero o limpio, práctico para almacenamiento y uso prolongado.'
    },
    {
      id: 2,
      title: 'Camarón seco',
      image: 'assets/images/cc.png',
      description: 'Deshidratado para conservarse por más tiempo, comer en sopas y guisos.'
    },
    {
      id: 3,
      title: 'Camarón precocido o cocido',
      image: 'assets/images/cp.png',
      description: 'Listo para consumir o usar directamente en ensaladas, cocteles y otros platillos rápidos.'
    }
  ];
}