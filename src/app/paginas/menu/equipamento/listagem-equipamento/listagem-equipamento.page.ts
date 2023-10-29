import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EquipamentoDTO } from 'src/app/models/EquipamentoDTO';
import { EquipamentoService } from 'src/app/services/domain/equipamentoservice';

@Component({
  selector: 'app-listagem-equipamento',
  templateUrl: './listagem-equipamento.page.html',
  styleUrls: ['./listagem-equipamento.page.scss'],
})
export class ListagemEquipamentoPage implements OnInit {

  equipamentos!: EquipamentoDTO[];

  constructor(public equipamentoService: EquipamentoService,
              private navController: NavController) { }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter(){
    this.equipamentoService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.equipamentos = response,                              
                              error:
                                (error) => console.log(error)
                           });
  }

  addEditEquipamento(){
    this.navController.navigateForward('equipamento-crud');
  }

  excluirEquipamento(id: number){
    this.equipamentoService.delete(id)
                           .subscribe({
                              next: 
                                (response) => window.location.reload(),                              
                              error:
                                (error) => console.log(error)
                           });
  }

  ngOnInit() {
  }
}
