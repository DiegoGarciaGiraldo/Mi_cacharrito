import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoguinUsuarioService } from '../servicios/loguin-usuario.service';
import { LoguinAdminService } from '../servicios/loguin-admin.service';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})
export class LoguinComponent {

  constructor(private router:Router, private servicio: LoguinUsuarioService, private admin_service: LoguinAdminService){}

  usuario!:string;
  clave!:string;

  usario!:string;
  password!: string;

  mostrarUsuario: boolean = true;

  mostrarAdmin: boolean = false;


  cambiarAUsuario() {
    this.mostrarUsuario = true;
    this.mostrarAdmin = false;
  }

  cambiarAAdmin() {
    this.mostrarAdmin = true;
    this.mostrarUsuario = false;

    const adm = document.getElementById("admin");

    adm!.style.display='block'

  }
 

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



  validacion_admin(){

    this.admin_service.loginAdmin(this.usuario,this.password).subscribe(dato=>{

      if(dato === true){

        this.ventana_admin()



      }else{
        alert("Error en las credenciales")
      }

    },error=>{
      alert("error de conexion con el servidor")
      console.log(error)
    })

  }


  ventana_admin(){
    const prin= document.getElementById("principal");

    prin!.style.display='none';

    this.router.navigate(['/admin'])
  }

}
