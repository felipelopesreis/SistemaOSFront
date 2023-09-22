import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { ClienteService } from 'src/app/services/domain/clienteservice';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.page.html',
  styleUrls: ['./listagem-cliente.page.scss'],
})
export class ListagemClientePage implements OnInit {

  clientes!: ClienteDTO[];

  constructor(public clienteService: ClienteService, public nav: NavController,public menu: MenuController ) { }

  ionViewDidEnter(){
    this.clienteService.findAll().subscribe(response=>{
                              this.clientes = response
                              //console.log(response)
                              },error=>{
                                  console.log(error);
                              
                              });
  }

  voltar(){
    this.nav.navigateForward('tabs/tab1')
}

  ngOnInit() {
  
  }
}
