import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

   constructor(private httpClient: HttpClient){
  
    }
  
    private bdURL = "http://localhost:8080/Persona"
    
    
  
    login_Usuario(
      cedula: string,
      nombre: string,
      apellidos: string,
      correo: string,
      telefono: string,
      fecha1: string,
      fecha2: string,
      categoria: string,
      clave: string): Observable<any>{
      return this.httpClient.get(`${this.bdURL}/crear?cedula=${cedula}`+
        `&nombre=${nombre}&apellidos=${apellidos}&correo=${correo}&telefono=${telefono}`+
        `&fecha1=${fecha1}&fecha2=${fecha2}&categoria=${categoria}&clave=${clave}`);
    }
}
