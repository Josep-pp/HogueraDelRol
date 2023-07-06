import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DadosComponent} from "./pages/dados/dados.component";
import {OraculoComponent} from "./pages/oraculo/oraculo.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";


const routes: Routes = [

  {
    path:'home', component: HomeComponent
  },
  {
    path:'dados', component: DadosComponent
  },
  {
    path:'oraculo', component: OraculoComponent
  },
  {
    path:'contacto', component: ContactoComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: "full"
  },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
