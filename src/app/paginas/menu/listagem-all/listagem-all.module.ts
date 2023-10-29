import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemAllPageRoutingModule } from './listagem-all-routing.module';

import { ListagemAllPage } from './listagem-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemAllPageRoutingModule
  ],
  declarations: [ListagemAllPage]
})
export class ListagemAllPageModule {}
