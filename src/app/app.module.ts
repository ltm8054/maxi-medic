import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { EncaComponent } from './enca/enca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { RadioControlValueAccessor } from '@angular/forms';
//Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';//Formularios reactivos
import { CarritoService } from './servicios/carrito.service';
import { ProductoService } from './servicios/producto.service';
import { SensorComponent } from './sensor/sensor.component';
import { ActualizarcontraComponent } from './actualizarcontra/actualizarcontra.component';
import { PerfilEmpComponent } from './perfil-emp/perfil-emp.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StoreComponent,
    PerfilComponent,
    MenuComponent,
    EncaComponent,
    CarritoComponent,
    RegistroComponent,
    ProductoComponent,
    EmpleadoComponent,
    SensorComponent,
    ActualizarcontraComponent,
    PerfilEmpComponent,
    ContactoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
