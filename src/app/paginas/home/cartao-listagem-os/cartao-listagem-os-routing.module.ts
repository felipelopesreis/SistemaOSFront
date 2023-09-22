import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoListagemOsPage } from './cartao-listagem-os.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoListagemOsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoListagemOsPageRoutingModule {}
