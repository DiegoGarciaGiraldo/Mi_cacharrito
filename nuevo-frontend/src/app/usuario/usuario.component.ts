import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  ngOnInit(): void {
    this.ocultar_loguin('none')
  }


  ocultar_loguin(valor:string){

    const prin= document.getElementById("principal");

    prin!.style.display=`${valor}`;

  }

}
