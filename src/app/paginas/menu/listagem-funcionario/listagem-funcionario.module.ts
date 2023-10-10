import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemFuncionarioPageRoutingModule } from './listagem-funcionario-routing.module';

import { ListagemFuncionarioPage } from './listagem-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemFuncionarioPageRoutingModule
  ],
  declarations: [ListagemFuncionarioPage]
})
export class ListagemFuncionarioPageModule {}
