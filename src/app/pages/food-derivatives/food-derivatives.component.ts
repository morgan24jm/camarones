import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FoodDerivative {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-food-derivatives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-derivatives.component.html',
  styleUrls: ['./food-derivatives.component.css']
})
export class FoodDerivativesComponent {
  derivatives: FoodDerivative[] = [
    {
      id: 1,
      title: 'Pulpa de camarón',
      image: 'assets/images/pc.png',
      description: 'Carne limpia y sin caparazón, lista para cocinar.'
    },
    {
      id: 2,
      title: 'Harina de camarón',
      image: 'assets/images/hc.png',
      description: 'Polvo obtenido del secado y molienda, usado principalmente en la alimentación animal.'
    },
    {
      id: 3,
      title: 'Salmuera y pastas de camarón',
      image: 'assets/images/pc.png',
      description: 'Concentrados empleados para dar sabor en la cocina, especialmente en la gastronomía asiática.'
    },
    {
      id: 4,
      title: 'Aceite de camarón',
      image: 'assets/images/ac.png',
      description: 'Extraído de la cocción o fritura, utilizado en alimentos y en algunas aplicaciones industriales.'
    },
    {
      id: 5,
      title: 'Botanas y snacks de camarón',
      image: 'assets/images/bc.png',
      description: 'Productos deshidratados o en polvo para consumo directo como aperitivos.'
    }
  ];
}