import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemAtendimentoPage } from './listagem-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemAtendimentoPageRoutingModule {}
