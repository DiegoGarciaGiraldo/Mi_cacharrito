import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';

@Component({
  selector: 'app-vista-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, RegistroUsuarioComponent],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {

  
    constructor(private route:Router){}
  
    componenteActual='';
  
    mostrarComponente(componente: string) {
      this.componenteActual = componente;
    }
  
    registro_usuario(){
      this.route.navigate(['/registro']);
    }
  

}
