import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado ={

        nombre:"",
        apellido:"",
        rfc:"",
        email:"",
        puesto: "",
        sueldo:"",
        password:"",
        tipo:"Empleado",
    

  }
  empleados:any;

  constructor(private servicioEmpleado: EmpleadoService, private servicioUsu:UsuarioService ) { }

  ngOnInit(): void {
  }

  guardarEmp(){
    this.servicioEmpleado.guardarEmp(this.empleado).subscribe(
      (res)=>{
        this.servicioUsu.guardarUsu(this.empleado).subscribe(
          (res)=>{
            alert("Empleado registrado");
            this.limpiarCampos();
            this.verEmpleados();
          },
          (err)=>{
            console.log(err);
            alert("Error al registrar empleado");
          }
        );

      },
      (err)=>{
        console.log(err);
        alert("Error al resgistrar el empleado");
      }

    )

  }//cierre guardar

  modificarEmp(){
    this.servicioEmpleado.modificarEmp(this.empleado).subscribe(
      (res)=>{
        this.servicioUsu.modificarUsu(this.empleado).subscribe(
          (res)=>{
            alert("Empleado modificado");
            this.limpiarCampos();
            this.verEmpleados();
          },
          (err)=>{
            console.log(err);
            alert("Error al modificar empleado");
          }
        );

      },
      (err)=>{
        console.log(err);
        alert("Error al modificar el empleado");
      }

    )
    
  }//cierre modificar

  eliminarEmp(){
    this.servicioEmpleado.eliminarEmp(this.empleado.email).subscribe(
      (res)=>{
        this.servicioUsu.eliminarUsu(this.empleado.email).subscribe(
          (res)=>{
            alert("Empleado elimando");
            this.limpiarCampos();
            this.verEmpleados();
          },
          (err)=>{
            console.log(err);
            alert("Error al elimanr empleado");
          }
        );

      },
      (err)=>{
        console.log(err);
        alert("Error al elimanr el empleado");
      }

    )
    
  }//cierre elimnar

  consultarEmp(){
    this.servicioEmpleado.consultarEmp(this.empleado).subscribe(
      (res)=>{
        
        this.empleado.nombre = res.empleado.nombre;
        this.empleado.apellido = res.empleado.apellido;
        this.empleado.rfc = res.empleado.rfc;
        this.empleado.email = res.empleado.email;
        this.empleado.puesto = res.empleado.puesto;
        this.empleado.sueldo = res.empleado.sueldo;
        

      },
      (err)=>{
        console.log(err);
        alert("Empleado no registrado");
        let emp = this.empleado.email;
        //this.limpiarCampos()
        this.empleado.email = emp;
      }
    );
    
  }//cierre consultar

  verEmpleados(){
    this.empleados = this.servicioEmpleado.verEmpleados();
    
  }//cierre verempleados

  limpiarCampos(){

    this.empleado.nombre="";
    this.empleado.apellido="";
    this.empleado.rfc="";
    this.empleado.email="";
    this.empleado.puesto= "";
    this.empleado.sueldo="";
    this.empleado.password="";
    
    
  }
}
