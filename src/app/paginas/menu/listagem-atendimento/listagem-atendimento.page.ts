import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AtendimentoDTO } from 'src/app/models/AtendimentoDTO';
import { FuncionarioDTO } from 'src/app/models/FuncionarioDTO';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { AtendimentoService } from 'src/app/services/domain/atendimentoservice';
import { FuncionarioService } from 'src/app/services/domain/funcionarioservice';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-listagem-atendimento',
  templateUrl: './listagem-atendimento.page.html',
  styleUrls: ['./listagem-atendimento.page.scss'],
})
export class ListagemAtendimentoPage implements OnInit {

  funcionarios!: FuncionarioDTO[];
  ordemServicos!: OrdemServicoDTO[];
  atendimentos!: AtendimentoDTO[];
  ordemServicoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public atendimentoService: AtendimentoService,
    public ordemServicoService: OrdemServicoService,
    public funcionarioService: FuncionarioService,
    public alertController: AlertController) { }

  ionViewDidEnter(){
    this.atendimentoService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.atendimentos = response,                              
                              error:
                                (error) => console.log(error)
                           });

                          
                            this.ordemServicoService.findAll().subscribe({
                              next: (response) => this.ordemServicos = response,
                              error: (error) => console.log(error)
                            });
                          
                            this.funcionarioService.findAll().subscribe({
                              next: (response) => this.funcionarios = response,
                              error: (error) => console.log(error)
                            });
                          

                           
  }

  /*excluirOrdemServico(id: number){
    this.ordemServicoService.delete(id)
                           .subscribe({
                              next: 
                                (response) => window.location.reload(),                              
                              error:
                                (error) => console.log(error)
                           });
  }*/


  ngOnInit() {
  }

}