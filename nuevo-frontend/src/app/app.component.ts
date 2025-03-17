import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoguinComponent } from "./loguin/loguin.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoguinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'nuevo-frontend';
}
