import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemComodatoPage } from './listagem-comodato.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemComodatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemComodatoPageRoutingModule {}
