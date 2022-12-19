import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  constructor(private router:Router){}


  ngOnInit(): void {
  }

//-----------------------------MIS VARIABLES------------------------------
nombre:any
email:any
contrasena:any
confContraseña:any
phone:any

//-----------------------------MIS METODOS------------------------------
storage(){
  localStorage.setItem('nombre', this.nombre)
  localStorage.setItem('email', this.email)
  localStorage.setItem('contraseña', this.contrasena)
  localStorage.setItem('phone', this.phone)
  this.router.navigate(['pgResult'])
}

//--------------------------REDIRECION POAGINA------------------------------


}
