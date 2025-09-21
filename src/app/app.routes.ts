import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'derivados-alimenticios',
    loadComponent: () => import('./pages/food-derivatives/food-derivatives.component').then(m => m.FoodDerivativesComponent)
  },
  {
    path: 'derivados-industriales',
    loadComponent: () => import('./pages/industrial-derivatives/industrial-derivatives.component').then(m => m.IndustrialDerivativesComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'confirmacion',
    loadComponent: () => import('./pages/confirmation/confirmation.component').then(m => m.ConfirmationComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
