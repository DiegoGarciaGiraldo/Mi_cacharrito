import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coche';
import { CocheService } from '../servicios/coche.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  ngOnInit(): void {
    this.ocultar_loguin('none')
  }

  constructor(private servicioCoche: CocheService){}

  coches!: Coche[];

  tipo!: string;


  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  ver_coches(){
    this.servicioCoche.vehiculos_disponibles(this.tipo).subscribe(dato =>{

      if(dato != false){

        this.coches=dato;

      }else{
        alert("no se encuentran coches en la categoria "+ this.tipo)
      }

    },error =>{
      alert(" error de respuesta, intentelo mas tarde")
      console.log(error)
    })
  }



}
