import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/domain/clienteservice';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  clienteForm!: FormGroup;
  clienteFormInsert!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public clienteService: ClienteService) { }

  submit(){
    this.clienteService.insert(this.clienteFormInsert.value)
                           .subscribe(response => {
                            this.presentAlert('Sucesso',
                              'O Cliente foi salvo com sucesso',
                              ['Ok'])
                           })
  }

  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

       this.clienteService.findById(id).subscribe(response => {
       this.clienteForm = this.formBuilder.group({
        id: [response.id],      
        nome: [response.nome, Validators.required],
        email: [response.email, Validators.required], 
        rua: [response.rua, Validators.required], 
        bairro: [response.bairro, Validators.required], 
        numero: [response.numero, Validators.required], 
    
      })
    })

    this.clienteService.findAll().subscribe(response => {
      this.clienteFormInsert = this.formBuilder.group({
      nome:[''],
     email: [''], 
     rua: [''], 
      bairro: [''], 
      numero: [''], 
    
     })
   })

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
            this.navController.navigateForward('listagem-cliente');
          }
        }
      ]
    });

    await alert.present();
  }
  voltar(){
    this.navController.navigateForward('tabs/tab1')
}

  

}
