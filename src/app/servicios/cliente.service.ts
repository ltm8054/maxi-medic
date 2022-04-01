import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //private url = "http://localhost:3000/cliente";

  private url = "http://localhost:3000/cliente";
  

  constructor(private http:HttpClient) { }

  consultarCli(cliente:object){
    return this.http.post<any>(this.url+"/email",cliente);

  }//end of consultarEmp

  GuardarCli(cliente:object){
    return this.http.post<any>(this.url,cliente);

  }//end of guardar

  modificarCli(cliente:object){
    return this.http.put<any>(this.url,cliente);
  }//Fin modificar

  eliminarEmp(email:String){
    return this.http.delete<any>(this.url+"/borrar/"+email);
  }//Fin eliminar

  verCli(){
    return this.http.get<any>(this.url);
  }//Fin Ver todo

  mostrarDatos(){
    return !!localStorage.getItem("nombre");
    return !!localStorage.getItem("apellido");
    return !!localStorage.getItem("telefono");
    return !!localStorage.getItem("direccion");
  }



}
