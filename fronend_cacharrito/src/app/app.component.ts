import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginAdministradorComponent } from './administrador/login-administrador.component';
import { NavComponent } from "./Principal/nav.component";
import { SignInComponent } from './Registro-Usuario/sign-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginAdministradorComponent, NavComponent,SignInComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronend_cacharrito';


  
}
