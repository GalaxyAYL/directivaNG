import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
    this.almacenar();
    this.almacenamientoManual();
  }
  //VARIABLES NECESARIAS

  sueldos:any=[3500,7300,3400,9800,2000,4750,1250];
  numero:any;
  suma:any=15;
  almacenamiento:any=0;

  // METODO PARA ALMACENAR LAS VARIABLES EN EL LOCAL  STORAGE 

  almacenamientoManual(){
   localStorage.setItem('valor_manual', this.almacenamiento)
  }

  //---------------------------------------------------------------
  almacenar (){
    localStorage.clear
    /*console.log("Guardado");

    localStorage.setItem('valor_total', this.suma);*/
  }

}
