import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemClientePageRoutingModule } from './listagem-cliente-routing.module';

import { ListagemClientePage } from './listagem-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemClientePageRoutingModule
  ],
  declarations: [ListagemClientePage]
})
export class ListagemClientePageModule {}
