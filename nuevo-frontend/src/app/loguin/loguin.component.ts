import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoguinUsuarioService } from '../servicios/loguin-usuario.service';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})
export class LoguinComponent {

  constructor(private router:Router, private servicio: LoguinUsuarioService){}

  usuario!:string;
  clave!:string;
 

  registro(){

    const prin= document.getElementById("principal");

    prin!.style.display='none';

    this.router.navigate(['/registro'])
    
  }


  validacion_usuario(){

    this.servicio.login_Usuario(this.usuario,this.clave).subscribe(dato=>{

      if(dato === true){

        this.ventana_usuario()



      }else{
        alert("Error en las credenciales")
      }

    },error=>{
      alert("error de conexion con el servidor")
      console.log(error)
    })

  }

  ventana_usuario(){
    const prin= document.getElementById("principal");

    prin!.style.display='none';

    this.router.navigate(['/usuario'])
  }

}
