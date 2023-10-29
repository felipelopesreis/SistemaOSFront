import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroComodatoPageRoutingModule } from './cadastro-comodato-routing.module';

import { CadastroComodatoPage } from './cadastro-comodato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroComodatoPageRoutingModule
  ],
  declarations: [CadastroComodatoPage]
})
export class CadastroComodatoPageModule {}
