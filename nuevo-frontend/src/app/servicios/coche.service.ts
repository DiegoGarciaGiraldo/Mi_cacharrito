import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor(private httpClient: HttpClient){
  
    }
  
    private bdURL = "http://localhost:8080/ver/coches"
    
    
  
    vehiculos_disponibles(tipo: string): Observable<any>{
      return this.httpClient.get(`${this.bdURL}/ListaCoches?tipo=${tipo}`);
    }
}
