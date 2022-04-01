import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoComponent } from './producto/producto.component';
import { PerfilEmpComponent } from './perfil-emp/perfil-emp.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { SensorComponent } from './sensor/sensor.component';
import { ActualizarcontraComponent } from './actualizarcontra/actualizarcontra.component';

const routes: Routes = [
  {path: "Inicio", component:HomeComponent},
  {path: "store", component:StoreComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "login", component:LoginComponent},
  {path: "carrito", component:CarritoComponent},
  {path: "resgistrate", component:RegistroComponent},
  {path: "producto", component:ProductoComponent},
  {path: "empleado", component:EmpleadoComponent},
  {path: "sensor", component:SensorComponent},
  {path: "actualizarcontra", component:ActualizarcontraComponent},
  {path: "perfilemp", component:PerfilEmpComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "**", redirectTo:"Inicio" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
