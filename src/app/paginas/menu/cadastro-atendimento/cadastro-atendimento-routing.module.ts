import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAtendimentoPage } from './cadastro-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAtendimentoPageRoutingModule {}
