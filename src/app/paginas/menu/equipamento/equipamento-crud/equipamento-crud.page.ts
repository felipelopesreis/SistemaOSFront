import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { EquipamentoService } from 'src/app/services/domain/equipamentoservice';

@Component({
  selector: 'app-equipamento-crud',
  templateUrl: './equipamento-crud.page.html',
  styleUrls: ['./equipamento-crud.page.scss'],
})
export class EquipamentoCrudPage implements OnInit {

  public modoDeEdicao = false;

  equipamentoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public equipamentoService: EquipamentoService) { }

  submit(){
    if(!this.modoDeEdicao){
      this.equipamentoService.insert(this.equipamentoForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O equipamento foi salvo com sucesso',
         ['Ok'])
      })
    }
    if(this.modoDeEdicao){
      this.equipamentoService.update(this.equipamentoForm.value)
      .subscribe(response => {
       this.presentAlert('Sucesso',
         'O equipamento foi atualizado com sucesso',
         ['Ok'])
      })
    }
    
  }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    
    if(id > 0){
      this.modoDeEdicao = true;
      this.equipamentoService.findById(id).subscribe(response => {
        this.equipamentoForm = this.formBuilder.group({
          id: [response.id],      
          nome: [response.nome, Validators.required],
          descricao: [response.descricao, Validators.required],
          dispositivo: [response.dispositivo, Validators.required],  
          marca: [response.marca, Validators.required], 
          foto: [response.foto, Validators.required], 
          quantidade: [response.quantidade, Validators.required]
        })
      })
    } else {
      this.modoDeEdicao = false;
      this.equipamentoForm = this.formBuilder.group({
        id,
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        dispositivo: ['', Validators.required],  
        marca: ['', Validators.required], 
        foto: ['', Validators.required], 
        quantidade: ['', Validators.required]
      })
    }

    
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
            this.navController.navigateForward('listagem-equipamento');
          }
        }
      ]
    });

    await alert.present();
  }
}
