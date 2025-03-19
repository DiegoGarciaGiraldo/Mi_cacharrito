import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Coche } from '../entidades/coche';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

   constructor(private httpClient: HttpClient){
    
      }
    
      private bdURL = "http://localhost:8080/Alquilar"
      
      
    
      realizar_alquiler(
        coche: string,
        fechai: string,
        fechat: string,
        valor: number): Observable<any>{
        return this.httpClient.get(`${this.bdURL}/registrar?placa=${coche}&`+
          `fechai=${fechai}&`+
          `fechat=${fechat}&valor=${valor}`
        );
      }

      mis_alquileres(): Observable<any>{
        return this.httpClient.get(`${this.bdURL}/alquileres`
        );
      }

      todos_alquileres(): Observable<any>{
        return this.httpClient.get(`${this.bdURL}/todosalquileres`
        );
      }

      eliminar_alquiler(
        id: number,
        placa: string,
      ): Observable<any>{
        return this.httpClient.get(`${this.bdURL}/eliminar?placa=${placa}&id=${id}`
        );
      }
      
}
