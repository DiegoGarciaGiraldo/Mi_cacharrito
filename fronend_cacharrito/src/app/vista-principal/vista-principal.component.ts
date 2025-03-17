import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet} from '@angular/router';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-vista-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {

  
    constructor(private route:Router){}
  
    componenteActual='principal';
  
    mostrarComponente(componente: string) {
      this.componenteActual = componente;
    }
  
    usuario(){
      this.route.navigate(['/usuario']);
    }
  

}
