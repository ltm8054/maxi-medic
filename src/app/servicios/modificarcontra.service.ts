import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarcontraService {

  private url ="http://localhost:3000/usuario/modificacontra";

  constructor(private http:HttpClient) { }

    modificarUsu(usuario: object){
      return this.http.put<any>(this.url,usuario);
  
    }//Modificar
}
