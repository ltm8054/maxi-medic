import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //private url = "http://localhost:3000/producto";

  private url ="http://localhost:3000/producto";
  constructor(private http:HttpClient) { }

  consultarProdu(producto:object){
    return this.http.post<any>(this.url+"/nombre",producto);

  }//end of consultarProduct

  guardarProdu(nombre:string,
    descripcion:string,
    existencia:string,
    precio:string,
    foto:File
    ){
      const fd = new FormData();
      fd.append('nombre', nombre);
      fd.append('descripcion', descripcion);
      fd.append('existencia', existencia);
      fd.append('precio', precio);
      fd.append('imagen', foto);
    return this.http.post<any>(this.url,fd);

  }//Guardar

  verProdu(){
    return this.http.get<any>(this.url);

  }//consultar

  modificarProdu(nombre:string,
    descripcion:string,
    existencia:string,
    precio:string,
    foto:File){
      const fd = new FormData();
      fd.append('nombre', nombre);
      fd.append('descripcion', descripcion);
      fd.append('existencia', existencia);
      fd.append('precio', precio);
      fd.append('imagen', foto);
    return this.http.put<any>(this.url, fd);

  }//Modificar

  eliminarProdu(nombre:String){
    return this.http.delete<any>(this.url+"/borrar/"+nombre)

  }//Eliminar

}
