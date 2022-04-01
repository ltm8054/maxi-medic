import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { PedidosService } from '../servicios/pedidos.service';
import { ProductoService } from '../servicios/producto.service';
import Swal from 'sweetalert2';

export interface Carrito{
  name:String;
  price:String;
}



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito:any;

  verC:any;
  total:any=0;

  //cantidad:any;

  
  pedido:any;

  nombres:any =[];

  

 
  
  

  constructor(public servicioCarrito:CarritoService,public servicioPedido:PedidosService, private servicioproducto:ProductoService) { }


  ngOnInit(): void {
    
    
    this.verC= JSON.parse(this.servicioCarrito.getProd());
    
    /* var con = JSON.stringify(this.verC);

    this.verC= JSON.parse(con);  */
  

    //var con = parseInt(this.verC[0].price);
    //var con2 = parseInt(this.verC[1].price);
    
    console.log('objetoObtenido: ', (this.verC[0].name));


      for(let i =0; i<this.verC.length;){
        console.log('objetoObtenido:', (this.verC[i].price));
      
        var con =parseInt(this.verC[i].price);
        this.total += con;

        this.nombres.push(this.verC[i].name)

         

        i++;
        
        this.pedido={
          email:JSON.stringify(localStorage.getItem("email")),
          nombre:this.nombres,
          cantidad:"",
          precio: this.total
        } 
        

       

        
        
        console.log("total: "+this.total+" compra: "+ JSON.stringify(this.pedido))
        
      
      }
       
      
   
    

  }

  delete(){

    
    
     for(let i =0; i < this.verC.length; i++){
        this.verC.pop(i,1);
        Swal.fire({
          title: 'Carrito',
          text: 'Producto eliminado',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        window.location.reload();
        return localStorage.setItem('prods', JSON.stringify(this.verC));
        
    } 
    
    
  }

  limpiar(){
    
    this.verC =[]
    this.servicioCarrito.vaciar();
    localStorage.removeItem('prods');
    //console.log('objetoObtenido: ', this.verC[0].price);
    window.location.reload();
    
    
  }

  compar(){
    this.verC =[]
    this.servicioCarrito.vaciar();
    alert("compra exitosa")
    localStorage.removeItem('prods');
    window.location.reload();
    

  }

   guardarPedido(){
    this.servicioPedido.guardarPedido(this.pedido).subscribe(
      (res)=>{
        //this.compar()
        console.log("pedido"+this.pedido);
        /* Swal.fire({
          title: 'Comprar',
          text: 'Compra exitosa',
          icon: 'success',
          confirmButtonText: 'OK',
          
        }); */
        alert("Compra exitosa")
        this.limpiar();
        

      },
      (err)=>{
        console.log(err);
        Swal.fire({
          title: 'Comprar',
          text: 'ha ocurrido un error',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }

    )

  }//cierre guardar 
  

  modificarprodu(){
    
  }


}
