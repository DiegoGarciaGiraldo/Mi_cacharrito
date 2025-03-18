import { LoguinAdminService } from '../servicios/loguin-admin.service';
import { Component, OnInit } from '@angular/core';
import { Coche } from '../entidades/coches';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  coches: Coche[] = [];

  mostrarPrincipal: boolean = true;

  mostrarDisponibles: boolean = true;

  mostrarNoDisponibles: boolean = false;

  mostrarTipo: boolean = true;

  mostrarAlquiler: boolean = false;




  cambiarADisponibles() {
    this.mostrarDisponibles = false;
    this.mostrarNoDisponibles = true;


  }

  cambiarANoDisponibles() {
    this.mostrarDisponibles = false;
    this.mostrarNoDisponibles = true;


  }


  cambiarAAlquiler() {
    this.mostrarAlquiler= true;
    this.mostrarTipo = false;
    this.mostrarDisponibles = false;
    this.mostrarNoDisponibles = false;
    this.mostrarPrincipal = false;

    const adm = document.getElementById("Alquiler");

    adm!.style.display='block'

  }

  cambiarATipo() {
    this.mostrarTipo= true;
    this.mostrarDisponibles = false;
    this.mostrarNoDisponibles = false;
    this.mostrarPrincipal = false;
  }

  


  ngOnInit(): void {
    this.ocultar_loguin('none')
    this.verCoches();
  }

  constructor(private admin_serv: LoguinAdminService) {}

  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  private verCoches(): void {
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



}
