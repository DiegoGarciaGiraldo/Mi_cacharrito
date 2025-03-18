import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoguinUsuarioService {

  constructor(private httpClient: HttpClient){

  }

  private bdURL = "http://localhost:8080/LoguinUsario"
  
  

  login_Usuario(usuario: String, password: String): Observable<any>{
    return this.httpClient.get(`${this.bdURL}/validacion?usuario=${usuario}&clave=${password}`);
  }

<<<<<<< HEAD


=======
  
>>>>>>> 2d148a5a10dbab87a434081f08907daa2d5dae2f
}
