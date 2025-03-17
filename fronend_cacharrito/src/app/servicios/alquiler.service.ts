import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../entities/alquiler';


@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  private apiUrl = 'http://localhost:8080/alquiler';

  constructor(private http: HttpClient) {}

  listarNoEntregados(): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(`${this.apiUrl}/Lista-No-Entregados`);
  }
}
