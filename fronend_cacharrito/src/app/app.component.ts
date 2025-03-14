import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginAdministradorComponent } from "./login-administrador/login-administrador.component";
import { NavComponent } from "./nav/nav.component";
import { SignInComponent } from './sign-in/sign-in.component';

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
