import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  mensaje={
    email:"",
    nombre:"",
    telefono:"",
    datos:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  mandar(){
    Swal.fire({
      title: 'Mensaje',
      text: 'Mensaje enviado',
      icon: 'success',
      confirmButtonText: 'OK',
      
    });
    this.limpiar();
  }

  limpiar(){
    this.mensaje.email="";
    this.mensaje.nombre="";
    this.mensaje.telefono="";
    this.mensaje.datos="";


  }

}
