import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemEquipamentoItemPageRoutingModule } from './listagem-equipamento-item-routing.module';

import { ListagemEquipamentoItemPage } from './listagem-equipamento-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemEquipamentoItemPageRoutingModule
  ],
  declarations: [ListagemEquipamentoItemPage]
})
export class ListagemEquipamentoItemPageModule {}
