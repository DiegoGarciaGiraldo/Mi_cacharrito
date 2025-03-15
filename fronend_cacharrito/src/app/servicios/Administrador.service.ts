import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Administrador {

  private bdURL = "http://localhost:8080/usuario_admin/login"
  
  constructor(private httpClient: HttpClient){

  }

  loginAdmin(usuario: String, password: String): Observable<any>{
    return this.httpClient.get(`${this.bdURL}?usuario=${usuario}&password=${password}`);
  }



}
