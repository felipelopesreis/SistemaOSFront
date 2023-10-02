import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { TecnicoAtendimentoDTO } from 'src/app/models/TecnicoAtendimentoDTO';
import { TecnicoAtendimentoService } from 'src/app/services/domain/tecnicoatendimentoservice';

@Component({
  selector: 'app-tecnicos-atendimento',
  templateUrl: './tecnicos-atendimento.page.html',
  styleUrls: ['./tecnicos-atendimento.page.scss'],
})
export class TecnicosAtendimentoPage implements OnInit {

  tecnicoatendimentos!: TecnicoAtendimentoDTO[];

  constructor(public tecnicoatendimentoservice: TecnicoAtendimentoService, public nav: NavController,public menu: MenuController ) { }

  ionViewDidEnter(){
    this.tecnicoatendimentoservice.findAll().subscribe(response=>{
                              this.tecnicoatendimentos = response
                              //console.log(response)
                              },error=>{
                                  console.log(error);
                              
                              });
  }

  ngOnInit() {
  }

}
