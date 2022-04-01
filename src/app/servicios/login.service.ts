import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private url = "http://localhost:3000/usuario/login";
  private url ="http://localhost:3000/usuario/iniciosesion";
  

  constructor(private http: HttpClient,
    private router: Router) { }

  login(usuario: object){
    return this.http.post<any>(this.url,usuario);
  }

  esEmpleado(){
    /*if(localStorage.getItem("puesto")==null){
      return false;

    }else{
      return true;
    }*/
    return !!localStorage.getItem("puesto");
  }

  esUsuario(){
    return !!localStorage.getItem("nombre");
  }

  esCliente(){
    //return !!localStorage.getItem("nombre");
    return !localStorage.getItem("puesto");
  

    
  }

  cerrarSesion(){
    //Remove jut one 
    //localStorage.removeItem("puesto");

    //remove all
    localStorage.clear();
    this.router.navigate(['./login'])
  }

  perfil(){
    return localStorage.getItem("puesto");
  }
}
