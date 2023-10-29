import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEquipamentoItemPage } from './cadastro-equipamento-item.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEquipamentoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEquipamentoItemPageRoutingModule {}
