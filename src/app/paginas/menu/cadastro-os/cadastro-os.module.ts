import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroOsPageRoutingModule } from './cadastro-os-routing.module';

import { CadastroOsPage } from './cadastro-os.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroOsPageRoutingModule
  ],
  declarations: [CadastroOsPage]
})
export class CadastroOsPageModule {}
