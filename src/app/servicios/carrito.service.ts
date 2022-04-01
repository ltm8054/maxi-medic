import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrito } from '../carrito/carrito.component';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  carrito: Carrito[];
  constructor() { 
  this.carrito=[]
  }

  getProd(){
    var p=localStorage.getItem("prods");
    var con = JSON.stringify(p);

     var verC= JSON.parse(con);
     
    
    return  verC
  
  }

  addProd(Producto:Carrito){
    this.carrito.push(Producto)
    localStorage.setItem('prods', JSON.stringify(this.carrito));
    alert("Producto agregado a tu carrito")
    

  }

  delete(Producto:Carrito){
    var verC = JSON.parse(this.getProd());
    for(let i =0; i < verC.length; i++){
      if(Producto == verC[i]){
        verC.pop(i, 1);
        

    }

    

  }
  
}//Dlete

  vaciar(){
    localStorage.removeItem("prods");
    
  }


}
