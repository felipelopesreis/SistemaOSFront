import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AtendimentoOrdemServicoDTO } from 'src/app/models/AtendimentoOrdemServicoAbertaDTO';
import { AtendimentoOsAbertaService } from 'src/app/services/domain/atendimentoosaberta.service';

@Component({
  selector: 'app-cartao-listagem-os',
  templateUrl: './cartao-listagem-os.page.html',
  styleUrls: ['./cartao-listagem-os.page.scss'],
})
export class CartaoListagemOsPage implements OnInit {

  atendimentososabertos!: AtendimentoOrdemServicoDTO[];

  constructor(public atendimentoosabertoservice: AtendimentoOsAbertaService, public nav: NavController,public menu: MenuController ) { }

  ionViewDidEnter(){
    this.atendimentoosabertoservice.findAll().subscribe(response=>{
                              this.atendimentososabertos = response
                              //console.log(response)
                              },error=>{
                                  console.log(error);
                              
                              });
  }


 




  ngOnInit() {
  }

}
