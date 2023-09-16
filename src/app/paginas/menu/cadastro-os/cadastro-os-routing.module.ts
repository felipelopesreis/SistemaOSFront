import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroOsPage } from './cadastro-os.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroOsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroOsPageRoutingModule {}
