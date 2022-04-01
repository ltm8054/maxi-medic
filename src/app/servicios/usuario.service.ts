import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private url = "http://localhost:3000/usuario";
  private url = "http://localhost:3000/usuario";

  constructor(private http : HttpClient) { }

  guardarUsu(usuario:object){
    return this.http.post<any>(this.url,usuario);

  }//Guardar

  consultarUsu(usuario:object){
    return this.http.post<any>(this.url+"/email",usuario);

  }//consultar

  modificarUsu(usuario: object){
    return this.http.put<any>(this.url,usuario);

  }//Modificar

  eliminarUsu(email:String){
    return this.http.delete<any>(this.url+"/borrar/"+email)

  }//Eliminar

  verUsuarios(){
    return this.http.get<any>(this.url);

  }//Ver




}
