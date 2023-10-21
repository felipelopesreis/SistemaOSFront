import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemOsPageRoutingModule } from './listagem-os-routing.module';

import { ListagemOsPage } from './listagem-os.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemOsPageRoutingModule
  ],
  declarations: [ListagemOsPage]
})
export class ListagemOsPageModule {}
