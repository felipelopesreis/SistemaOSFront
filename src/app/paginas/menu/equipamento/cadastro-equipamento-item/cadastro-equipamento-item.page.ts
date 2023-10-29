import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { EquipamentoDTO } from 'src/app/models/EquipamentoDTO';
import { EquipamentoItemDTO } from 'src/app/models/EquipamentoItemDTO';
import { EquipamentoItemService } from 'src/app/services/domain/equipamentoitemservice';
import { EquipamentoService } from 'src/app/services/domain/equipamentoservice';

@Component({
  selector: 'app-cadastro-equipamento-item',
  templateUrl: './cadastro-equipamento-item.page.html',
  styleUrls: ['./cadastro-equipamento-item.page.scss'],
})
export class CadastroEquipamentoItemPage implements OnInit {

  equipamentos!: EquipamentoDTO[];
  equipamentoItem!: EquipamentoItemDTO;
  equipamentoItemForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public equipamentoService: EquipamentoService,
    public equipamentoItemService: EquipamentoItemService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.equipamentoItemForm = this.formBuilder.group({
      serial: ['', Validators.required],
      situacao: ['', Validators.required],
      equipamento: ['', Validators.required]
    })
  }

  submit(){
    let equipamentoItem = {
      'serial': this.equipamentoItemForm.value.serial,
      'situacao': this.equipamentoItemForm.value.situacao,
      'equipamento': {
        'id': this.equipamentoItemForm.value.equipamento
      }
    }

    this.equipamentoItemService.insert(equipamentoItem)
                               .subscribe(response => {
                                  this.presentAlert('Sucesso',
                                    'O Item foi salvo com sucesso', ['Ok'])
                               })
  }

  ionViewDidEnter(){
    this.equipamentoService.findAll().subscribe({
      next: (response) => this.equipamentos = response,
      error: (error) => console.log(error)
    });
  }

  async presentAlert(header: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }

}
