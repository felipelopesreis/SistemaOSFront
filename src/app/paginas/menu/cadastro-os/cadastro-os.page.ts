import { Component, OnInit } from '@angular/core';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-cadastro-os',
  templateUrl: './cadastro-os.page.html',
  styleUrls: ['./cadastro-os.page.scss'],
})
export class CadastroOsPage implements OnInit {

  ordemservicos!: OrdemServicoDTO[];

  constructor(public ordemServicoService: OrdemServicoService) { }

  ionViewDidEnter(){
    this.ordemServicoService.findAll().subscribe(response=>{
                              //this.ordemservicos = response
                              console.log(response)
                              },error=>{
                                  console.log(error);
                              
                              });
  }

  ngOnInit() {
  }

}
