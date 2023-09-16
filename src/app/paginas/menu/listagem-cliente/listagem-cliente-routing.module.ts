import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemClientePage } from './listagem-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemClientePageRoutingModule {}
