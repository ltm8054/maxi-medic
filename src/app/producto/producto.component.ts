import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  valor=false;

  producto={
        nombre:"",
        descripcion:"",
        existencia:"",
        precio:"",
        imgurl: ""
  }

  productos:any;
  file:any;

  constructor(private  servicioProducto: ProductoService) { }

  ngOnInit(): void {
  }

  fotoSeleccionada(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file =<File>event.target.files[0]

    }
  }//end of foto seleccionada


  guardarProdu(){
    this.servicioProducto.guardarProdu(this.producto.nombre,
      this.producto.descripcion, 
      this.producto.existencia,
      this.producto.precio,
      this.file).subscribe(
      (res)=>{
        //mensaje
            
            alert("Producto registrado");
            //Limpiar
            this.limpiarCampos();
            this.verProdu();
            

      },
      (err)=>{
        console.log(err);
        alert("Error al resgistrar el Producto");
      }

    )

  }//cierre guardar

  modificarProdu(){
    this.servicioProducto.modificarProdu(this.producto.nombre,
      this.producto.descripcion, 
      this.producto.existencia,
      this.producto.precio, 
      this.file).subscribe(
      (res)=>{
        
            alert("Producto modificado");
            this.limpiarCampos();
            this.verProdu();
          

      },
      (err)=>{
        console.log(err);
        alert("Error al modificar el producto");
      }

    )
    
  }//cierre modificar

  eliminarProdu(){
    this.servicioProducto.eliminarProdu(this.producto.nombre).subscribe(
      (res)=>{

            alert("Producto elimando");
            this.limpiarCampos();
            this.verProdu();
          

      },
      (err)=>{
        if (err.error == "No existe") {
          alert("Producto no encontrado")
          
        }else{
        console.log(err);
        alert("Error al elimanar el Producto");
        }
      }

    )
    
  }//cierre elimnar


  consultarProdu(){
    this.servicioProducto.consultarProdu(this.producto).subscribe(res =>{
      this.producto = res.producto;
    },err=>{
      if (err.error == "No existe") {
        alert("Producto no encontrado")
        
      }
      let nom = this.producto.nombre;
      this.limpiarCampos();
      this.producto.nombre = nom;
      console.log(err);
    }
      
    );
    
  }//cierre consultar

  verProdu(){
    this.productos = this.servicioProducto.verProdu();
    
  }//cierre ver

  limpiarCampos(){

    this.producto.nombre="",
    this.producto.descripcion="",
    this.producto.existencia="",
    this.producto.precio="",
    this.producto.imgurl=""
  }

  validacion(){
    if(this.valor==false){
      this.valor=true;
    }else{
      this.valor=false

    }
  }


}
