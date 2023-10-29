import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemEquipamentoPage } from './listagem-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemEquipamentoPageRoutingModule {}
