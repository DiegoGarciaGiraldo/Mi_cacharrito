import { LoguinAdminService } from '../servicios/loguin-admin.service';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coche';
import { CommonModule } from '@angular/common';
import { CocheService } from '../servicios/coche.service';
import { FormsModule } from '@angular/forms';
import { Alquiler } from '../entidades/alquiler';
import { AlquilerService } from '../servicios/alquiler.service';

import { differenceInDays } from 'date-fns'; 

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  ngOnInit(): void {
    this.ocultar_loguin('none')
    this.verCochesNoDisponibles();
    this.ver_alquileres()
  }

  coches: Coche[] = [];

  alquiler: Alquiler= new Alquiler;

  tipo!: string;

  placa: string = '';
  vehiculo: any = null;

  coche!: Coche;

  fechaActual = new Date();

  mostrarPrincipal: boolean = true;

  mostrarDisponibles: boolean = false;

  mostrarNoDisponibles: boolean = true;

  mostrarTipo: boolean = false;

  mostrarAlquiler: boolean = false;
  
  mostrarBuscarPlaca: boolean = false;

  alquileres!: Alquiler[];

  recargo!:number;

  cambiarAPrincipal() {
    this.mostrarPrincipal = true;
    this.mostrarTipo = this.mostrarAlquiler = false;
    this.mostrarNoDisponibles = true;

  }

 

  cambiarABuscarPlaca(){
    this.mostrarBuscarPlaca = true;
    this.mostrarDisponibles = false;
    this.mostrarNoDisponibles = false;

  }


  cambiarAAlquiler() {
    this.mostrarAlquiler= true;
    this.mostrarPrincipal = this.mostrarTipo = false;

  }

  cambiarATipo() {
    this.mostrarTipo= true;
    this.mostrarPrincipal = this.mostrarAlquiler = false;
  }

  cambiarADisponible(){
    this.mostrarDisponibles = true;
    this.mostrarNoDisponibles = this.mostrarBuscarPlaca = false;
  }

  cambiarANoDisponible(){
    this.mostrarNoDisponibles = true;
    this.mostrarDisponibles = this.mostrarBuscarPlaca = false;
  }

  


  

  constructor(private admin_serv: LoguinAdminService, private servicioCoche: CocheService, private servicioAlquiler:AlquilerService) {}

  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  verCoches(): void {
    this.admin_serv.obtenerListaCoches().subscribe({
      next: (dato) => {
        this.coches = dato;
        console.log(this.coches);
      },
      error: (err) => {
        console.log('Error al obtener la lista de coches:', err);
      }
    });
  }

  verCochesNoDisponibles(): void {
    this.coches = [];
    this.admin_serv.obtenerListaCochesNoDisponibles().subscribe({
      next: (dato) => {
        this.coches = dato;
        console.log(this.coches);
      },
      error: (err) => {
        console.log('Error al obtener la lista de coches:', err);
      }
    });
  }


  ver_coches() {
    console.log("Tipo de vehículo antes de la petición:", this.tipo); // Verifica si tiene un valor

  if (!this.tipo) {
    alert("Error: Debes seleccionar un tipo de vehículo.");
    return;
  }

    this.servicioCoche.vehiculos_disponibles(this.tipo).subscribe({
      
      next: (dato) => {
        if (dato && dato.length > 0) {
          this.coches = dato;
        } else {
          alert("No se encuentran coches en la categoría " + this.tipo);
          this.coches = [];
        }
      },
      error: (err) => {
        alert("Error de respuesta, inténtelo más tarde");
        console.error(err);
      }
    });
  }



  
 
  buscarVehiculo() {
    this.servicioCoche.buscarCoche(this.placa).subscribe(data => {
      this.vehiculo = data;
    }, error => {
      console.log("Vehículo no encontrado");
    });
  }

  
  marcarComoEntregado() {
    if (this.vehiculo) {
      this.servicioCoche.actualizarEstado(this.vehiculo.placa, 'entregado').subscribe(response => {
        alert('Vehículo marcado como entregado');
        this.vehiculo.estado = 'entregado';
      });
    }
  }


  ver_alquileres(){
    this.servicioAlquiler.todos_alquileres().subscribe(dato=>{

      this.alquileres=dato

      console.log(this.alquileres)
    })
  }

  mora(id:number){

    const encontrado = this.alquileres.find(buscado => buscado.numeroAlquiler === id);
    const modal = document.getElementById("exampleModal")
   

    if (encontrado && (encontrado.estadoAlq != "terminado")) {
      
      modal!.style.display='block';
      this.alquiler = encontrado;
      console.log(this.alquiler)
      this.calcular_mora()
    } else {

      alert("no se encuentra en mora el alquiler");
      this.alquiler = new Alquiler();
      this.recargo=0;

      
    }

  }

  calcular_mora(){

    var act= this.fechaActual
    var final = this.alquiler.fechaFinal

    var dias= differenceInDays(act, final);


    this.recargo = this.alquiler.coche.valorAlq*dias;



  }


}


