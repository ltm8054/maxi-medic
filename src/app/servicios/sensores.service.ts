import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SensoresService {
  //private url="http://192.168.70.84:3000/sensor"
  private url="http://localhost:3000/sensor"
  constructor(private http:HttpClient) { }

  iniciar(){
    return this.http.get<any>(this.url);
  }

  detener(){
    return this.http.get<any>(this.url+"/detener");
  }

  guardar(datos:object){
    return this.http.post<any>(this.url,datos);
  }
}
