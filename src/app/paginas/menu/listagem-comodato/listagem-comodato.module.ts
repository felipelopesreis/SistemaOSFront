import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemComodatoPageRoutingModule } from './listagem-comodato-routing.module';

import { ListagemComodatoPage } from './listagem-comodato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemComodatoPageRoutingModule
  ],
  declarations: [ListagemComodatoPage]
})
export class ListagemComodatoPageModule {}
