import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemEquipamentoPageRoutingModule } from './listagem-equipamento-routing.module';

import { ListagemEquipamentoPage } from './listagem-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemEquipamentoPageRoutingModule
  ],
  declarations: [ListagemEquipamentoPage]
})
export class ListagemEquipamentoPageModule {}
