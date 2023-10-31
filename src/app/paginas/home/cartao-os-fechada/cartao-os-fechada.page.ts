import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AtendimentoOrdemServicoFechadoDTO } from 'src/app/models/AtendimentoOrdemServicoFechadoDTO';
import { AtendimentoOsFechadoService } from 'src/app/services/domain/atendimentoosfechado.service';

@Component({
  selector: 'app-cartao-os-fechada',
  templateUrl: './cartao-os-fechada.page.html',
  styleUrls: ['./cartao-os-fechada.page.scss'],
})
export class CartaoOsFechadaPage implements OnInit {
  atendimentososfechados!: AtendimentoOrdemServicoFechadoDTO[];

  constructor(public atendimentoosfechadoservice: AtendimentoOsFechadoService,
     public nav: NavController,
     public menu: MenuController ) { }

  ionViewDidEnter(){
    this.atendimentoosfechadoservice.findAll().subscribe(response=>{
                              this.atendimentososfechados = response
                              //console.log(response)
                              },error=>{
                                  console.log(error);
                              
                              });
  }


 


  ngOnInit() {
  }

}
