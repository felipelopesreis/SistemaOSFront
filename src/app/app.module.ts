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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OrdemServicoService, ClienteService, AtendimentoOsAbertaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
