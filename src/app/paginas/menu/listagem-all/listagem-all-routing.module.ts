import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemAllPage } from './listagem-all.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemAllPageRoutingModule {}
