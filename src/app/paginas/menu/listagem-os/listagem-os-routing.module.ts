import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemOsPage } from './listagem-os.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemOsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemOsPageRoutingModule {}
