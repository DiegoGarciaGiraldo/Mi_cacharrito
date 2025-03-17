import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { LoginAdministradorComponent } from './administrador/login-administrador.component';
import { NavComponent } from "./Principal/nav.component";
import { SignInComponent } from './Registro-Usuario/sign-in.component';
=======
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { NavegadorComponent } from './navegador/navegador.component';
>>>>>>> f431347618691d8cfeecf2775ebe35727a5ef17a

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VistaPrincipalComponent, RouterOutlet, NavegadorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
