import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CocheService {
  obtenerCochesOcupados() {
    throw new Error('Method not implemented.');
  }
  obtenerListaCoches: any;

  constructor(private httpClient: HttpClient){
  
    }
  
    private bdURL = "http://localhost:8080/ver/coches"
    
    
  
  

  buscarCoche(placa: string): Observable<any> {
    return this.httpClient.get(`${this.bdURL}/buscar?placa=${placa}`);
  }

  actualizarEstado(placa: string, estado: string): Observable<any> {
    return this.httpClient.post(`${this.bdURL}/actualizarEstado?placa=${placa}&estado=${estado}`, {});
  }

  vehiculos_disponibles(tipoVeh: string): Observable<any>{
    return this.httpClient.get(`${this.bdURL}/filtros?tipo=${tipoVeh}`);
  }

  vehiculos_ocupados(tipoVeh: string): Observable<any>{
    return this.httpClient.get(`${this.bdURL}/ocupados?tipo=${tipoVeh}`);
  }

    
}
