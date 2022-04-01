import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-perfil-emp',
  templateUrl: './perfil-emp.component.html',
  styleUrls: ['./perfil-emp.component.css']
})
export class PerfilEmpComponent implements OnInit {

  empleado={
    nombre:"",
    apellido:"",
    rfc:"",
    email:"",
    puesto:"",
    sueldo:""

  }
  empleados:any;

  constructor(private servicioempleado:EmpleadoService,
    private servicioLogin:LoginService) { }

  ngOnInit(): void {
  }

  modificarCli(){
    this.servicioempleado.modificarEmp(this.empleado).subscribe(
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

    this.empleado.nombre="";
    this.empleado.apellido="";
    this.empleado.rfc="";
    this.empleado.email= "";
    this.empleado.puesto= "";
    this.empleado.sueldo= "";
  }

  consultarCli(){
    this.servicioempleado.consultarEmp(this.empleado).subscribe(
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
        alert("Datos incorrectos");
        let emp = this.empleado.email;
        //this.limpiarCampos()
        this.empleado.email = emp;
      }
    );
    
  }//cierre consultar

}
