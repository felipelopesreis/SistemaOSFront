import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemFuncionarioPage } from './listagem-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemFuncionarioPageRoutingModule {}
