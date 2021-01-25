import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './Componentes/formulario/formulario.component';
import { IntroduccionComponent } from './Componentes/introduccion/introduccion.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { Page404Component } from './Componentes/page404/page404.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'registro', component: FormularioComponent},
  {path: 'conocenos', component: IntroduccionComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
