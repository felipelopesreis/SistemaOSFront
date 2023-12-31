import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ComodatoDTO } from 'src/app/models/ComodatoDTO';
import { EquipamentoItemDTO } from 'src/app/models/EquipamentoItemDTO';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { ComodatoService } from 'src/app/services/domain/comodatoservice';
import { EquipamentoItemService } from 'src/app/services/domain/equipamentoitemservice';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-listagem-comodato',
  templateUrl: './listagem-comodato.page.html',
  styleUrls: ['./listagem-comodato.page.scss'],
})
export class ListagemComodatoPage implements OnInit {

  ordemServicos!: OrdemServicoDTO[];
  equipamentoItems!: EquipamentoItemDTO[];
  comodatos!: ComodatoDTO[];
  comodatoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public comodatoService: ComodatoService,
    public ordemServicoService: OrdemServicoService,
    public equipamentoItemService: EquipamentoItemService,
    public alertController: AlertController) { }

  ionViewDidEnter(){
    this.comodatoService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.comodatos = response,                              
                              error:
                                (error) => console.log(error)
                           });

                          
                            this.ordemServicoService.findAll().subscribe({
                              next: (response) => this.ordemServicos = response,
                              error: (error) => console.log(error)
                            });

                            this.equipamentoItemService.findAll().subscribe({
                              next: (response) => this.equipamentoItems = response,
                              error: (error) => console.log(error)
                            });
                          

                           
  }

  excluirComodato(id: number){
    this.comodatoService.delete(id)
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
