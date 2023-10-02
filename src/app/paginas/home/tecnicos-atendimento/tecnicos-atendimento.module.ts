import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnicosAtendimentoPageRoutingModule } from './tecnicos-atendimento-routing.module';

import { TecnicosAtendimentoPage } from './tecnicos-atendimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnicosAtendimentoPageRoutingModule
  ],
  declarations: [TecnicosAtendimentoPage]
})
export class TecnicosAtendimentoPageModule {}
