# Camarones y sus Derivados - Aplicación Angular 19

Una aplicación web moderna desarrollada con Angular 19 y PrimeNG, enfocada en mostrar información sobre camarones y sus derivados alimenticios e industriales.

## 📋 Requisitos Previos
- **Node.js utilizado**:v22.12
- **npm**: v9.0.0+
- **Angular CLI**: v19.0.0+

## 🛠️ Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/morgan24jm/camarones
   cd camarones-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install 
   ```

3. **Ejecutar la aplicación**:
   ```bash
   npm start
   # o
   ng serve --port 4200 
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/                           # Página principal
│   │   │   ├── home.component.html
│   │   │   ├── home.component.ts
│   │   │   └── home.component.css
│   │   ├── products/                       # Catálogo de productos
│   │   │   ├── products.component.html
│   │   │   ├── products.component.ts
│   │   │   └── products.component.css
│   │   ├── food-derivatives/               # Derivados alimenticios
│   │   │   ├── food-derivatives.component.html
│   │   │   ├── food-derivatives.component.ts
│   │   │   └── food-derivatives.component.css
│   │   ├── industrial-derivatives/         # Derivados industriales
│   │   │   ├── industrial-derivatives.component.html
│   │   │   ├── industrial-derivatives.component.ts
│   │   │   └── industrial-derivatives.component.css
│   │   ├── checkout/                       # Proceso de compra
│   │   │   ├── checkout.component.html
│   │   │   ├── checkout.component.ts
│   │   │   └── checkout.component.css
│   │   ├── confirmation/                   # Confirmación de compra
│   │   │   ├── confirmation.component.html
│   │   │   ├── confirmation.component.ts
│   │   │   └── confirmation.component.css
│   │   └── auth/                           # Autenticación
│   │       ├── login/
│   │       │   ├── login.component.html
│   │       │   ├── login.component.ts
│   │       │   └── login.component.css
│   │       └── register/
│   │           ├── register.component.html
│   │           ├── register.component.ts
│   │           └── register.component.css
│   └── shared/
│       └── components/
│           └── header/                     # Componente de navegación
│               ├── header.component.html
│               ├── header.component.ts
│               └── header.component.css
├── assets/
│   └── images/                             # Imágenes de productos
│       ├── logo.png
│       ├── camarones.png
│       ├── cg.png
│       ├── pa.jpg
│       ├── pi.jpg
│       └── [más imágenes...]
└── environments/                           # Configuración de entornos
```

## 🎨 Paleta de Colores

```css
:root {
  --primary-pink: #F8E0E0;      /* Rosa principal */
  --card-beige: #E0DCDC;        /* Beige tarjeta */
  --text-dark: #333333;         /* Texto oscuro */
  --orange-shrimp: #FF8C00;     /* Naranja camarón */
  --yellow-accent: #FFD700;     /* Amarillo acento */
  --red-accent: #DC143C;        /* Rojo acento */
  --green-accent: #228B22;      /* Verde acento */
  --brown-accent: #8B4513;      /* Marrón acento */
  --white: #FFFFFF;             /* Blanco */
  --gray-light: #6C757D;        /* Gris claro */
  --gray-medium: #495057;        /* Gris medio */
}
```

## 📱 Páginas de la Aplicación

### 1. Página Principal (`/`)
- **Mobile**: Diseño vertical con imagen y texto centrados
- **Desktop**: Diseño horizontal con imagen a la izquierda y texto a la derecha
- Información general sobre camarones y sus derivados

### 2. Productos (`/productos`)
- **Producto Principal**: Camarón fresco entero (con cabeza y cáscara)
- **Productos Secundarios**: 
  - Camarón congelado (entero o limpio)
  - Camarón seco
  - Camarón precocido/cocido
- **Mobile**: Scroll vertical
- **Desktop**: Scroll horizontal con 3 columnas

### 3. Derivados Alimenticios (`/derivados-alimenticios`)
- Pulpa de camarón
- Harina de camarón
- Salmuera y pastas de camarón
- Aceite de camarón
- Botanas y snacks de camarón

### 4. Derivados Industriales (`/derivados-industriales`)
- Quitina y quitosano
- Pigmentos naturales (astaxantina)
- Fertilizantes orgánicos

### 5. Proceso de Compra
- **Checkout** (`/checkout`): Formulario de compra con dirección, pago y cantidad
- **Confirmación** (`/confirmacion`): Pantalla de éxito de compra

### 6. Autenticación
- **Login** (`/login`): Inicio de sesión con validación
- **Registro** (`/registro`): Creación de cuenta con validación

## 🧩 Componentes

### Header Component
- **Mobile**: Menú hamburguesa con sidebar deslizante
- **Desktop**: Navegación horizontal con botones
- **Responsive**: Adaptación automática según tamaño de pantalla
- **Navegación**: Iconos circulares con imágenes 

### Navegación
- **Iconos**: Productos (🦐), Alimenticios (🍽️), Industriales (🏭)
- **Funcionalidad**: RouterLink para navegación entre páginas

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm start                    # Ejecutar en modo desarrollo
ng serve --port 4200        # Servidor de desarrollo


```

### Estructura de Archivos
Cada componente sigue la estructura:
```
component-name/
├── component-name.component.html    # Template
├── component-name.component.ts      # Lógica
└── component-name.component.css     # Estilos
```

