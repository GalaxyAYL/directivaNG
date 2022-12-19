import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.obtStorage()
  }
  //-----------------------------MIS VARIABLES------------------------------
nombre:any
email:any
contrasena:any
confContraseña:any
phone:any

//-----------------------------MIS METODOS------------------------------
obtStorage(){
  this.nombre=localStorage.getItem('nombre')
  this.email=localStorage.getItem('email')
  this.contrasena=localStorage.getItem('contrasena')
  this.phone=localStorage.getItem('phone')
}

//--------------------------REDIRECION POAGINA------------------------------
 
}
