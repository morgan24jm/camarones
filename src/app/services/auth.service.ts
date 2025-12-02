import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  // Usuarios simulados
  private users: User[] = [
    {
      id: 1,
      name: 'Juan Garcia',
      email: 'juan@test.com',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      email: 'maria@test.com',
      avatar: 'assets/images/user-avatar.png'
    },
    {
      id: 3,
      name: 'Carlos Lopez',
      email: 'carlos@test.com',
      avatar: 'assets/images/user-avatar.png'
    }
  ];

  constructor() {
    // Verificar si hay usuario guardado en localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  // Simular login
  login(email: string, password: string): Observable<{ success: boolean; message: string; user?: User }> {
    return new Observable(observer => {
      // Simular delay de red
      setTimeout(() => {
        const user = this.users.find(u => u.email === email);
        
        if (user && password === '123456') { // Password fijo para simulación
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next({ success: true, message: 'Login exitoso', user });
        } else {
          observer.next({ success: false, message: 'Credenciales incorrectas' });
        }
        observer.complete();
      }, 1000); // 1 segundo de delay
    });
  }

  // Simular registro
  register(name: string, email: string, password: string): Observable<{ success: boolean; message: string; user?: User }> {
    return new Observable(observer => {
      setTimeout(() => {
        // Verificar si el email ya existe
        const existingUser = this.users.find(u => u.email === email);
        if (existingUser) {
          observer.next({ success: false, message: 'El email ya está registrado' });
        } else {
          const newUser: User = {
            id: this.users.length + 1,
            name,
            email,
            avatar: 'assets/images/user-avatar.png'
          };
          this.users.push(newUser);
          this.currentUserSubject.next(newUser);
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          observer.next({ success: true, message: 'Registro exitoso', user: newUser });
        }
        observer.complete();
      }, 1000);
    });
  }

  // Logout
  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // Obtener usuario actual
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
