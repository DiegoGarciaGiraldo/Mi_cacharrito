import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers:[DatePipe],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit {

  // implementacion de inicio
  ngOnInit(): void {
    
    this.ocultar_loguin('none')
    
  }

  //constructor
  constructor( private route:Router, private servicio:PersonaService, private datepipe:DatePipe){}

  //Declaración de variables

  cedula!:string;
  nombre!:string;
  apellidos!:string;
  correo!: string;
  telefono!: string;

  licencia!:string;
  nlicencia!:string;

  vigencia!:string;
  nvigencia!:string;
  
  categoria!:string;
  clave!:string;

  // implementación de funciones y metodos
  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  formatearfecha(){

   this.nlicencia = this.datepipe.transform(this.licencia,'dd/MM/yyy')||'';
   this.nvigencia = this.datepipe.transform(this.vigencia,'dd/MM/yyy')||'';

  }

  registrar(){

    this.servicio.login_Usuario(
      this.cedula,
      this.nombre,
      this.apellidos,
      this.correo,
      this.telefono,
      this.nlicencia,
      this.nvigencia,
      this.categoria,
      this.clave
    ).subscribe(dato=>{

      if (dato=== true){

        alert("registro exitoso")

        this.volver();

      }else{
        alert("hubo un error al crear el usuario")
      }
    },error=>{
      alert("hubo un error en los datos, es puede ser debido a: /ln"+
            "1. Existe un usuario con las credenciales que se ingresaron /ln"+
            "2. El numero telefonico ya se encuentra registrado en el sistema /ln"+
            "3. Error del servidor, si el problema persiste comuniquese con los desarrolladores")

      console.log(error)

    })

    

    
  }

  volver(){
    this.ocultar_loguin('block')
    this.route.navigate(['/'])
  }

}
