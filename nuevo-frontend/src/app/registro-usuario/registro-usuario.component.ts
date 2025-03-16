import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit {
  ngOnInit(): void {
    
    this.ocultar_loguin('none')
    
  }

  constructor( private route:Router){}


  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

  registrar(){

    this.volver();
  }

  volver(){
    this.ocultar_loguin('block')
    this.route.navigate(['/'])
  }

}
