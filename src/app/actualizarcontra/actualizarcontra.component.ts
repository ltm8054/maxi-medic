import { Component, OnInit } from '@angular/core';
import { ModificarcontraService } from '../servicios/modificarcontra.service';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-actualizarcontra',
  templateUrl: './actualizarcontra.component.html',
  styleUrls: ['./actualizarcontra.component.css']
})
export class ActualizarcontraComponent implements OnInit {

  usuario={
    email:"",
    password:"",
    pass2:""
  }

  constructor(private serviciocontra:ModificarcontraService,
    public servicioLogin:LoginService) { }

  ngOnInit(): void {
  }

  modificarUsu(){
    if(this.usuario.pass2 == this.usuario.password){
      this.serviciocontra.modificarUsu(this.usuario).subscribe(
      (res)=>{
        
          console.log("Contraseña correcta");
          alert("Contraseña modificada");
          this.limpiarCampos();
          this.servicioLogin.cerrarSesion();

        

      },
      (err)=>{
        console.log(err);
        alert("Error al modificar");
      }
    );
  }else{
    alert("Error al modificar");
  }
    
  }//cierre modificar

  limpiarCampos(){

    this.usuario.email="";
    this.usuario.password="";
    
    
  }

}
