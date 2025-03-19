import { LoguinAdminService } from '../servicios/loguin-admin.service';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coches';
import { CommonModule } from '@angular/common';
import { CocheService } from '../servicios/coche.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  coches: Coche[] = [];

  tipo!: string;

  placa: string = '';
  vehiculo: any = null;



  mostrarPrincipal: boolean = true;

  mostrarDisponibles: boolean = false;

  mostrarNoDisponibles: boolean = true;

  mostrarTipo: boolean = false;

  mostrarAlquiler: boolean = false;
  
  mostrarBuscarPlaca: boolean = false;


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

  


  ngOnInit(): void {
    this.ocultar_loguin('none')
    this.verCochesNoDisponibles();
  }

  constructor(private admin_serv: LoguinAdminService, private servicioCoche: CocheService) {}

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




}
