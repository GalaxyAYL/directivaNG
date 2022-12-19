import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.clear;
    /*this.recuperar()*/
  }

  valor_rec:any=0;

  recuperar(){
    this.valor_rec=localStorage.getItem('valor_total');
  }

}
