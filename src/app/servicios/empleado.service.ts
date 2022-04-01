import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //private url = "http://localhost:3000/empleado";
  private url= "http://localhost:3000/empleado";

  constructor(private http : HttpClient) { }

  consultarEmp(empleado:object){
    return this.http.post<any>(this.url+"/email",empleado);
  }//end of consultarEmp

  guardarEmp(empleado:object){
    return this.http.post<any>(this.url,empleado);
  }//Fin guardar

  modificarEmp(empleado:object){
    return this.http.put<any>(this.url,empleado);
  }//Fin modificar

  eliminarEmp(email:String){
    return this.http.delete<any>(this.url+"/borrar/"+email);
  }//Fin eliminar

  verEmpleados(){
    return this.http.get<any>(this.url);
  }//Fin Ver todos


}
