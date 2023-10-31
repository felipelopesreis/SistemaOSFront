import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdemServicoService } from './services/domain/ordemservico.service';
import { ClienteService } from './services/domain/clienteservice';
import { AtendimentoOsAbertaService } from './services/domain/atendimentoosaberta.service';
import { TecnicoAtendimentoService } from './services/domain/tecnicoatendimentoservice';
import { FuncionarioService } from './services/domain/funcionarioservice';
import { AtendimentoService } from './services/domain/atendimentoservice';
import { EquipamentoService } from './services/domain/equipamentoservice';
import { EquipamentoItemService } from './services/domain/equipamentoitemservice';
import { ComodatoService } from './services/domain/comodatoservice';
import { AtendimentoOsFechadoService } from './services/domain/atendimentoosfechado.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OrdemServicoService, ClienteService, AtendimentoOsAbertaService, TecnicoAtendimentoService, FuncionarioService, AtendimentoService, EquipamentoService, EquipamentoItemService,ComodatoService, AtendimentoOsFechadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
