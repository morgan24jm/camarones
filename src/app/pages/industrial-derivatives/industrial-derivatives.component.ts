import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndustrialDerivative {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-industrial-derivatives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industrial-derivatives.component.html',
  styleUrls: ['./industrial-derivatives.component.css']
})
export class IndustrialDerivativesComponent {
  derivatives: IndustrialDerivative[] = [
    {
      id: 1,
      title: 'Quitina y quitosano',
      image: 'assets/images/qc.png',
      description: 'Compuestos del exoesqueleto del camarón con aplicaciones en medicina, cosmética, agricultura y biotecnología.'
    },
    {
      id: 2,
      title: 'Pigmentos naturales (astaxantina)',
      image: 'assets/images/pic.png',
      description: 'Extraídos del caparazón, utilizados como antioxidantes y para dar color en acuicultura.'
    },
    {
      id: 3,
      title: 'Fertilizantes orgánicos',
      image: 'assets/images/fc.png',
      description: 'Elaborados con residuos de cáscara y cabeza, mejoran la nutrición del suelo de forma natural.'
    }
  ];
}