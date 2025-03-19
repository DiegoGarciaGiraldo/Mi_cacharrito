import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coche';
import { CocheService } from '../servicios/coche.service';
import { FormsModule } from '@angular/forms';
import { differenceInDays } from 'date-fns'; 
import { AlquilerService } from '../servicios/alquiler.service';
import { Alquiler } from '../entidades/alquiler';
import jsPDF from 'jspdf';


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
    this.ver_alquileres()
  }

  


  pdf:any;

  constructor(private servicioCoche: CocheService, private datepipe:DatePipe 
    , private servicioAlquiler: AlquilerService
  ){}

  coches!: Coche[];

  coche!: Coche;

  alquileres!: Alquiler[];

  alquiler: Alquiler= new Alquiler;

  tipo!: string;

  finicio!:string; // fecha inicial que entra en formato yyyy-MM-dd
  nfinicio!:string;// fecha inicial formateada dd-MM-yyyy

  ffin!:string;// fecha final que entra en formato yyyy-MM-dd
  nffin!:string;// fecha final formateada dd-MM-yyyy

  daysDifference: number | null = null;

  tarifa!:number;


  muestraAlquilar: boolean = true;
  muestralista: boolean = false;


  verAlquilar(){

    this.muestraAlquilar = true;
    this.muestralista = false;

  }

  verlista(){

    this.muestraAlquilar = false;
    this.muestralista = true;

  }



  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  ver_coches(){
    this.servicioCoche.vehiculos_disponibles(this.tipo).subscribe(dato =>{

      if(dato != (false && [])){

        this.coches=dato;

      }else{
        alert("no se encuentran coches en la categoria "+ this.tipo)
        this.coches=[]
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

    this.tarifa= this.daysDifference!*this.coche.valorAlq!;

  }


  alquilar_coche(id:string){

    const encontrado = this.coches.find(buscado => buscado.placa === id);
   

    if (encontrado) {
      this.coche = encontrado;
    } else {
      console.error("Coche no encontrado con la placa: ", id);
    }
    
  }


  realizar_alquiler(){

    this.servicioAlquiler.realizar_alquiler(this.coche.placa, this.nfinicio, this.nffin, this.tarifa).subscribe(dato=>{

      if(dato){
        alert( "solicitud de alquiler exitosa")

        this.alquiler=dato;
        this.descargar_pdf()

        window.location.reload()
      }else{
        alert("algo ocurrio con la solicitud")
      }


    },error =>{
      alert("error del servidor, intentelo mas tarde")
      console.log(error)
    })

  }

  ver_alquileres(){
    this.servicioAlquiler.mis_alquileres().subscribe(dato=>{

      this.alquileres=dato

      console.log(this.alquileres)
    })
  }

  eliminar_alquiler(id:number,placa:string){
    this.servicioAlquiler.eliminar_alquiler(id,placa).subscribe(dato =>{
      if(dato ==true){
        alert("se elimino el alquiler")
        window.location.reload()
      }else{
        alert("algo salio mal")
      }
    })
  }

  descargar_pdf(){

    const doc = new jsPDF()


    doc.text(`Gracia por alquilar este vehiculo "Mi Cacharrito se lo agaradece"`,20,10)
    doc.text(`Aqui teiene la informacion de su alquiler:"`,20,20)
    doc.text(`numero de alquiler = ${this.alquiler.numeroAlquiler}`,20,30)
    doc.text(`fecha de reclamo =${this.alquiler.fechaInicio}`,20,40)
    doc.text(`fecha de entrega =${this.alquiler.fechaFinal}`,20,50)
    doc.text(`placa del vehiculo${this.alquiler.coche.placa}`,20,60)
    doc.text(`tipo = ${this.alquiler.coche.tipoVeh}`,20,70)
    doc.text(`color = ${this.alquiler.coche.color}`,20,80)
    doc.text(`A nombre de = ${this.alquiler.persona.nombre} ${this.alquiler.persona.apellido}`,20,90)

    doc.save(`alquiler.pdf`)

  }
}
