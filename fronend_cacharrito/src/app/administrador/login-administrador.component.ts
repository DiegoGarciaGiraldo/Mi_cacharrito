import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Administrador } from '../servicios/Administrador.service';
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

  constructor(private AdminService: Administrador) {}

  Ingresar(){
    this.AdminService.loginAdmin(this.usuario, this.password).subscribe(data => {
      alert(data);
    })

  }

}


