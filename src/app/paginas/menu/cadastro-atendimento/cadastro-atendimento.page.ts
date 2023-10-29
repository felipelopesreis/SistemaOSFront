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
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.page.html',
  styleUrls: ['./cadastro-atendimento.page.scss'],
})
export class CadastroAtendimentoPage implements OnInit {
  
  public modoDeEdicao = false;

  atendimento!: AtendimentoDTO;
  ordemServicos!: OrdemServicoDTO[];
  funcionarios!: FuncionarioDTO[];
  atendimentoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public atendimentoService: AtendimentoService,
    public ordemServicoService: OrdemServicoService,
    public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private navController: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if(id > 0){
      this.modoDeEdicao = true;
       this.atendimentoService.findById(id).subscribe(response => {
       this.atendimentoForm = this.formBuilder.group({
        id: [response.id],      
        relatoTecnico: [response.relatoTecnico, Validators.required],
        funcionario:[response.funcionario, Validators.required],
        os: [response.os, Validators.required], 

      })
    })
  
    }else{
      this.modoDeEdicao = false;

    this.atendimentoForm = this.formBuilder.group({
      relatoTecnico: ['', Validators.required],
      funcionario: ['', Validators.required],
      os: ['', Validators.required]
    })
  
  }

}

  submit(){
    let atendimento = {
      'relatoTecnico': this.atendimentoForm.value.relatoTecnico,
      'funcionario': {
        'id': this.atendimentoForm.value.funcionario
      },
      'os': {
        'id': this.atendimentoForm.value.os
      }
    }

    if(!this.modoDeEdicao){
    this.atendimentoService.insert(atendimento)
                               .subscribe(response => {
                                  this.presentAlert('Sucesso',
                                    'A atendimento foi salvo com sucesso', ['Ok'])
                               })
                              }
                              if(this.modoDeEdicao){
                                this.atendimentoService.update(this.atendimentoForm.value)
                                .subscribe(response => {
                                 this.presentAlert('Sucesso',
                                   'O Atendimento foi atualizado com sucesso',
                                   ['Ok'])
                                })
                            }
  }

  ionViewDidEnter(){

    this.funcionarioService.findAll().subscribe({
      next: (response) => this.funcionarios = response,
      error: (error) => console.log(error)
    });

    this.ordemServicoService.findAll().subscribe({
      next: (response) => this.ordemServicos = response,
      error: (error) => console.log(error)
    });


  }

  async presentAlert(header: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('listagem-os');
          }
        }
      ]
    });

    await alert.present();
  }

}