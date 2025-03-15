import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginAdministradorComponent } from '../administrador/login-administrador.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginAdministradorComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
