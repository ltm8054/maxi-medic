import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { CarritoService } from '../servicios/carrito.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  producto={
    nombre:"",
    descripcion:"",
    existencia:"",
    precio:"",
    imgurl: ""

}
prod:any={
    nombre:"",
    descripcion:"",
    precio:""

}

productos:any;
file:any;



  constructor(private servicioProducto: ProductoService,
    private servicioCarrito: CarritoService,
    public servicioLogin:LoginService) { }

  ngOnInit(): void {
    
  }

  
    products = this.servicioProducto.verProdu();

    consultarProdu(){
      this.productos = this.servicioProducto.consultarProdu(this.producto).subscribe(res =>{
        this.producto = res.producto;
      },err=>{
        if (err.error == "No existe") {
          alert("Producto no encontrado")
          
        }
        let nom = this.producto.nombre;
        //this.limpiarCampos();
        this.producto.nombre = nom;
        console.log(err);
      }
        
      );
      
    }//cierre consultar

    

    add(name:HTMLParagraphElement, price:HTMLSpanElement){
      console.log("añadir...", name.innerHTML, price.innerHTML);
      this.servicioCarrito.addProd({
        name: name.innerHTML, 
        price: price.innerHTML

      })
      console.log(this.servicioCarrito.getProd());
     
      return false
      


      

    }

    
    
  

  

}
