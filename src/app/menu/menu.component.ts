import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public servicioLogin:LoginService) { }

  ngOnInit(): void {
  }

}
