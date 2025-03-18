import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoguinComponent } from "./loguin/loguin.component";
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoguinComponent, AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'nuevo-frontend';
}
