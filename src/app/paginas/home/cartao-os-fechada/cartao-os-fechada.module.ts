import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoOsFechadaPageRoutingModule } from './cartao-os-fechada-routing.module';

import { CartaoOsFechadaPage } from './cartao-os-fechada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoOsFechadaPageRoutingModule
  ],
  declarations: [CartaoOsFechadaPage]
})
export class CartaoOsFechadaPageModule {}
