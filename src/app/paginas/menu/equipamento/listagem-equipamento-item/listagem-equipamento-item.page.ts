import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { EquipamentoDTO } from 'src/app/models/EquipamentoDTO';
import { EquipamentoItemDTO } from 'src/app/models/EquipamentoItemDTO';
import { EquipamentoItemService } from 'src/app/services/domain/equipamentoitemservice';
import { EquipamentoService } from 'src/app/services/domain/equipamentoservice';

@Component({
  selector: 'app-listagem-equipamento-item',
  templateUrl: './listagem-equipamento-item.page.html',
  styleUrls: ['./listagem-equipamento-item.page.scss'],
})
export class ListagemEquipamentoItemPage implements OnInit {

  equipamentos!: EquipamentoDTO[];
  equipamentoItens!: EquipamentoItemDTO[];
  equipamentoItemForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public equipamentoItemService: EquipamentoItemService,
    public equipamentoService: EquipamentoService,
    public alertController: AlertController) { }

  ionViewDidEnter(){
    this.equipamentoItemService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.equipamentoItens = response,                              
                              error:
                                (error) => console.log(error)
                           });

                          
                            this.equipamentoService.findAll().subscribe({
                              next: (response) => this.equipamentos = response,
                              error: (error) => console.log(error)
                            });
                          

                           
  }

  excluirOrdemServico(id: number){
    this.equipamentoItemService.delete(id)
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
