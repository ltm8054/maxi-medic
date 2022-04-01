import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente={
    nombre:"",
    apellido:"",
    email: "",
    telefono: "",
    direccion: ""
  }

  usuario={
    email:"",
    password:""
  }

  clientes:any;
  constructor(private servicioCliente:ClienteService,
    private servicioUsuario:UsuarioService) { }

  ngOnInit(): void {
    
  }

  modificarCli(){
    this.servicioCliente.modificarCli(this.cliente).subscribe(
      (res)=>{
        alert("Se actualizaron tus datos");
        this.limpiarCampos();
        //this.verEmpleados();
      },
      (err)=>{
        console.log(err);
        alert("Error al modificar datos");
      }

    )
    
  }//cierre modificar

  limpiarCampos(){

    this.cliente.nombre="";
    this.cliente.apellido="";
    this.cliente.email="";
    this.cliente.telefono= "";
    this.cliente.direccion= "";
  }

  consultarCli(){
    this.servicioCliente.consultarCli(this.cliente).subscribe(
      (res)=>{
        
        this.cliente.nombre = res.cliente.nombre;
        this.cliente.apellido = res.cliente.apellido;
        this.cliente.email = res.cliente.email;
        this.cliente.telefono = res.cliente.telefono;
        this.cliente.direccion = res.cliente.direccion;
        

      },
      (err)=>{
        console.log(err);
        alert("Datos incorrectos");
        let cli = this.cliente.email;
        //this.limpiarCampos()
        this.cliente.email = cli;
      }
    );
    
  }//cierre consultar

  verCli(){
    this.clientes = this.servicioCliente.verCli();
    
  }//cierre verempleados

}
