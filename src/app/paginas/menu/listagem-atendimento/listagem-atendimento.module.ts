import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemAtendimentoPageRoutingModule } from './listagem-atendimento-routing.module';

import { ListagemAtendimentoPage } from './listagem-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemAtendimentoPageRoutingModule
  ],
  declarations: [ListagemAtendimentoPage]
})
export class ListagemAtendimentoPageModule {}
