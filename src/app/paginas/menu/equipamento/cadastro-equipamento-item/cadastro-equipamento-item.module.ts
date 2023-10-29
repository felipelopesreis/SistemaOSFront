import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEquipamentoItemPageRoutingModule } from './cadastro-equipamento-item-routing.module';

import { CadastroEquipamentoItemPage } from './cadastro-equipamento-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroEquipamentoItemPageRoutingModule
  ],
  declarations: [CadastroEquipamentoItemPage]
})
export class CadastroEquipamentoItemPageModule {}
