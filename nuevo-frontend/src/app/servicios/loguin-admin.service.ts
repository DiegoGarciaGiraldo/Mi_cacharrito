import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coche } from '../entidades/coche';

@Injectable({
  providedIn: 'root'
})
export class LoguinAdminService {

  constructor(private httpClient: HttpClient){
  }

    
  private bdURL = "http://localhost:8080/usuario_admin/login"
  

    loginAdmin(usuario: String, password: String): Observable<any>{
      return this.httpClient.get(`${this.bdURL}?usuario=${usuario}&password=${password}`);
    }

    private carURL = "http://localhost:8080/ver/coches/ListaCoches"
    obtenerListaCoches(): Observable<Coche[]>{
      return this.httpClient.get<Coche[]>(`${this.carURL}`);
    }
  

  
}
