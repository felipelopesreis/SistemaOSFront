import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComodatoPage } from './cadastro-comodato.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroComodatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroComodatoPageRoutingModule {}
