import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFuncionarioPageRoutingModule } from './cadastro-funcionario-routing.module';

import { CadastroFuncionarioPage } from './cadastro-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFuncionarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroFuncionarioPage]
})
export class CadastroFuncionarioPageModule {}
