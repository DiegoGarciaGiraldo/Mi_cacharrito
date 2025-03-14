import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-administrador.component.html',
  styleUrl: './login-administrador.component.css'
})
export class LoginAdministradorComponent {
  usuario = '';
  password = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {}

  abrirModal(){
    const modal = document.getElementById("admin");
    if(modal)
      modal.style.display = 'block';
  }

  cerrarModal() {
    const modal = document.getElementById("admin")
    if (modal) {
      modal.style.display = 'none';
    }

  }

  SesionIniciada() {
    if (this.usuario === 'kaizen123' && this.password === '12345'){
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/dashboard']); // Redirigir a otra página
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
