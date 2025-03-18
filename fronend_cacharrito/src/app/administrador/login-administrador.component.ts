import { AdministradorService } from './../servicios/Administrador.service';
import { AdministradorService } from '../servicios/Administrador.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alquiler } from '../entities/alquiler';
import { AlquilerService } from '../servicios/alquiler.service';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-administrador.component.html',
  styleUrl: './login-administrador.component.css'
})
export class LoginAdministradorComponent {

  usuario: string = '';
  password: string = '';

  ingresar(): void {
    
    this. AdministradorService.login(this.usuario, this.password).subscribe(
      (respuesta) => {
        if (respuesta.exito) {
          alert('Inicio de sesión exitoso');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        alert('Error al iniciar sesión');
      }
    );
  }

  



  

}


