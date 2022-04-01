import { Component, OnInit } from '@angular/core';
import { SensoresService } from '../servicios/sensores.service';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  datos={
    lectura:"",
    lecturadia:"",
    lecturafecha:""
  } 

  intervalo:any

  constructor(private sensorServicio: SensoresService ) {}

  ngOnInit(): void {
  }

  iniciar(){
    this.sensorServicio.iniciar().subscribe(res=>{
      this.datos.lectura=res.valorInfrarojo;
    },err=>{
      console.log(err);
    });
  }

  detener(){
    this.sensorServicio.detener().subscribe(res=>{
     this.pausa();
     alert("lectura detenida");
    },err=>{
      console.log(err);
    });
  }

  guardar(){
    this.sensorServicio.guardar(this.datos).subscribe(res=>{
      alert("Datos guardados");
    },err=>{
      console.log(err);
    });
  }

  startTimer(){
    this.intervalo =setInterval(()=>{
      this.iniciar();
    },1000); //5*60*1000 = 300000 miliseg ejecuta cada 5 minutos
  }

    pausa(){
      clearInterval(this.intervalo);
    }
  

}
