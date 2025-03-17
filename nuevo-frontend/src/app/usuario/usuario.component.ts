import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coche';
import { CocheService } from '../servicios/coche.service';
import { FormsModule } from '@angular/forms';
import { differenceInDays } from 'date-fns'; 

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[DatePipe],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  ngOnInit(): void {
    this.ocultar_loguin('none')
  }

  constructor(private servicioCoche: CocheService, private datepipe:DatePipe){}

  coches!: Coche[];

  coche: Coche = new Coche();

  tipo!: string;

  finicio!:string;
  nfinicio!:string;

  ffin!:string;
  nffin!:string;

  daysDifference: number | null = null;


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

  formatearfecha(){

    this.nfinicio = this.datepipe.transform(this.finicio,'dd/MM/yyy')||'';
    this.nffin = this.datepipe.transform(this.ffin,'dd/MM/yyy')||'';
 
  }

  calcular_dias(){

    if (this.finicio && this.ffin) {
      const start = new Date(this.finicio);
      const end = new Date(this.ffin);
      this.daysDifference = differenceInDays(end, start);
    } else {
      this.daysDifference = null;
    }

  }


  alquilar_coche(id:string){

    const encontrado = this.coches.find(buscado => buscado.placa === id);
   

    if (encontrado) {
      this.coche = encontrado;
    } else {
      console.error("Coche no encontrado con la placa:", id);
    }
    

  }



}
