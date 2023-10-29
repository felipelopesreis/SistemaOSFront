import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipamentoCrudPage } from './equipamento-crud.page';

const routes: Routes = [
  {
    path: '',
    component: EquipamentoCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipamentoCrudPageRoutingModule {}
