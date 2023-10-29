import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAtendimentoPageRoutingModule } from './cadastro-atendimento-routing.module';

import { CadastroAtendimentoPage } from './cadastro-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroAtendimentoPageRoutingModule
  ],
  declarations: [CadastroAtendimentoPage]
})
export class CadastroAtendimentoPageModule {}
