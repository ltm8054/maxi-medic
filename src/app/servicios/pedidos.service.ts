import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private url = "http://localhost:3000/pedido"
  //private url = "http://192.168.70.147:3000/pedido"

  constructor(private http: HttpClient) { }

  guardarPedido(pedido:object){
    return this.http.post<any>(this.url,pedido);
  }//Fin guardar



}
