import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoOsFechadaPage } from './cartao-os-fechada.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoOsFechadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoOsFechadaPageRoutingModule {}
