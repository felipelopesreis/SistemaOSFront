import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoListagemOsPageRoutingModule } from './cartao-listagem-os-routing.module';

import { CartaoListagemOsPage } from './cartao-listagem-os.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoListagemOsPageRoutingModule
  ],
  declarations: [CartaoListagemOsPage]
})
export class CartaoListagemOsPageModule {}
