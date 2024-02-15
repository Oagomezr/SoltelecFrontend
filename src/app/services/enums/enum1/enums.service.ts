import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enum1Response } from '../../../models/enums/enum1/Enum1Response';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  private baseUrl = 'http://localhost:8087';
  constructor(private http: HttpClient) {}

  getClasesVehiculos(): Observable<Enum1Response>{
    return this.http.get<Enum1Response>(`${this.baseUrl}/public/vehiculos/clases`);
  }

  getMarcasVehiculos(name:string): Observable<Enum1Response>{
    return this.http.get<Enum1Response>(`${this.baseUrl}/public/vehiculos/marcas/${name}`);
  }

  getLineaVehiculo(name:string, id:number): Observable<Enum1Response>{
    return this.http.get<Enum1Response>(`${this.baseUrl}/public/vehiculos/lineas/${name}/${id}`);
  }

  getTiposServicios(): Observable<Enum1Response>{
    return this.http.get<Enum1Response>(`${this.baseUrl}/public/vehiculos/tipoServicio`);
  }

  getServiciosEspeciales(): Observable<Enum1Response>{
    return this.http.get<Enum1Response>(`${this.baseUrl}/public/vehiculos/serviciosEspeciales`);
  }

}
