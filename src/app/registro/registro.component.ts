import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { ClienteService } from '../servicios/cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cliente={
    nombre:"",
    apellido:"",
    email: "",
    telefono: "",
    direccion: "",
    password:"",
    tipo:"Cliente",
    estatus:"Activo",
  }

  constructor(private servicioCliente:ClienteService, private servicioUsuario:UsuarioService) { }

  ngOnInit(): void {
  }

  guardarCli(){
    this.servicioCliente.GuardarCli(this.cliente).subscribe(
      (res)=>{
        this.servicioUsuario.guardarUsu(this.cliente).subscribe(
          (res)=>{
            alert("Registrado Exitosamente");
            this.limpiarCampos();
            //this.verEmpleados();
          },
          (err)=>{
            console.log(err);
            alert("Error al registrarte");
          }
        );

      },
      (err)=>{
        console.log(err);
        alert("Error al resgistrar el empleado");
      }

    )

  }//cierre guardar


  limpiarCampos(){

    this.cliente.nombre="";
    this.cliente.apellido="";
    this.cliente.email="";
    this.cliente.telefono= "";
    this.cliente.direccion= "";
    this.cliente.estatus="";
    
    
  }




}
