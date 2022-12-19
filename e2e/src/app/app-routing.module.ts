import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path:'pgRec', component:RecuperarComponent
  },
  {
    path:'pgForm',component: FormularioComponent
  },
  {
    path:'pgResult',component: ResultadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
