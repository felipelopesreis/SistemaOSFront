import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnicosAtendimentoPage } from './tecnicos-atendimento.page';

const routes: Routes = [
  {
    path: '',
    component: TecnicosAtendimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicosAtendimentoPageRoutingModule {}
