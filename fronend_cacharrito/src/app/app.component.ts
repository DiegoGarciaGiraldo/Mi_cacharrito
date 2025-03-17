import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { NavegadorComponent } from './navegador/navegador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VistaPrincipalComponent, RouterOutlet, NavegadorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
