import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ComodatoDTO } from 'src/app/models/ComodatoDTO';
import { EquipamentoItemDTO } from 'src/app/models/EquipamentoItemDTO';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { ComodatoService } from 'src/app/services/domain/comodatoservice';
import { EquipamentoItemService } from 'src/app/services/domain/equipamentoitemservice';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-cadastro-comodato',
  templateUrl: './cadastro-comodato.page.html',
  styleUrls: ['./cadastro-comodato.page.scss'],
})
export class CadastroComodatoPage implements OnInit {

  public modoDeEdicao = false;

  
  ordemServicos!: OrdemServicoDTO[];
  equipamentoItems!: EquipamentoItemDTO[];
  comodato!: ComodatoDTO;
  comodatoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public comodatoService: ComodatoService,
    public ordemServicoService: OrdemServicoService,
    public equipamentoItemService: EquipamentoItemService,
    private route: ActivatedRoute,
    private navController: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if(id > 0){
      this.modoDeEdicao = true;
       this.comodatoService.findById(id).subscribe(response => {
       this.comodatoForm = this.formBuilder.group({
        id: [response.id],      
        dataInstalacao: [response.dataInstalacao, Validators.required],
        dataDevolucao: [response.dataDevolucao, Validators.required],
        os: [response.os, Validators.required],
        equipamentoItem: [response.equipamentoItem, Validators.required]
      })
    })
  }else{
    this.modoDeEdicao = false;

    this.comodatoForm = this.formBuilder.group({
      dataInstalacao: ['', Validators.required],
      dataDevolucao: ['', Validators.required],
      os: ['', Validators.required],
      equipamentoItem: ['', Validators.required]
    })
  }
  }

 

  submit(){
    let comodato = {
      'dataInstalacao': this.comodatoForm.value.dataInstalacao,
      'dataDevolucao': this.comodatoForm.value.dataDevolucao,
      'os': {
        'id': this.comodatoForm.value.os
      },
      'equipamentoItem': {
        'id': this.comodatoForm.value.equipamentoItem
      }
    }

    if(!this.modoDeEdicao){
    this.comodatoService.insert(comodato)
                               .subscribe(response => {
                                  this.presentAlert('Sucesso',
                                    'O comodato foi salvo com sucesso', ['Ok'])
                               })

                              
      }

      if(this.modoDeEdicao){
        this.comodatoService.update(this.comodatoForm.value)
        .subscribe(response => {
         this.presentAlert('Sucesso',
           'O comodato foi atualizado com sucesso',
           ['Ok'])
        });
          }
           
        

  }

  ionViewDidEnter(){
    this.ordemServicoService.findAll().subscribe({
      next: (response) => this.ordemServicos = response,
      error: (error) => console.log(error)
    });

    this.equipamentoItemService.findAll().subscribe({
      next: (response) => this.equipamentoItems = response,
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
            this.navController.navigateForward('listagem-comodato');
          }
        }
      ]
    });

    await alert.present();
  }
}
