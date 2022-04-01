import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { EmpleadoService } from '../servicios/empleado.service';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email:"",
    password:"",
  }

  constructor(private servicioLogin:LoginService,
    private servicioEmp:EmpleadoService, private servicioCli:ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  iniciosesion(){
    this.servicioLogin.login(this.usuario).subscribe(
      (res)=>{

        if(res.usuario.tipo=="Empleado"){

          this.servicioEmp.consultarEmp(this.usuario).subscribe( 
            (res)=>{
              console.log(res);
              localStorage.setItem("nombre",res.empleado.nombre);
              localStorage.setItem("puesto",res.empleado.puesto);
              alert("Bienvenido: "+res.empleado.nombre);
             
              
              this.router.navigate(['./Inicio']);

            },
            (err)=>{
              console.log(err);

            }
           );
          
        }//end if empleado
        else if(res.usuario.tipo=="Cliente"){
          this.servicioCli.consultarCli(this.usuario).subscribe( 
            (res)=>{
              console.log(res);
              localStorage.setItem("nombre",res.cliente.nombre);
              localStorage.setItem("email",res.cliente.email);
              //localStorage.setItem("tipo",res.user.tipo);
              alert("Bienvenido: "+res.cliente.nombre);
              this.router.navigate(['./store']);

            },
            (err)=>{
              console.log(err);

            }
           );
          

        }
        //console.log(res);

      },
      (err)=>{
        console.log(err);
        //alert("Usuario o contraseña incorrecta");
        Swal.fire({
          title: 'Error!',
          text: 'usuario o contraseña incorrecto',
          icon: 'question',
          confirmButtonText: 'Continuar'
        })

      }
    );
  }

}
