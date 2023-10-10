import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { FuncionarioService } from 'src/app/services/domain/funcionarioservice';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.page.html',
  styleUrls: ['./cadastro-funcionario.page.scss'],
})
export class CadastroFuncionarioPage implements OnInit {

  public modoDeEdicao = false;

  funcionarioForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private navController: NavController,
              private route: ActivatedRoute,
              public funcionarioService: FuncionarioService) { }

  submit(){
    if(!this.modoDeEdicao){
    this.funcionarioService.insert(this.funcionarioForm.value)
                           .subscribe(response => {
                            this.presentAlert('Sucesso',
                              'O Funcionario foi salvo com sucesso',
                              ['Ok'])
                           })
  }
  if(this.modoDeEdicao){
    this.funcionarioService.update(this.funcionarioForm.value)
    .subscribe(response => {
     this.presentAlert('Sucesso',
       'O Funcionario foi atualizado com sucesso',
       ['Ok'])
    })
}
  
  }


  ngOnInit() {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if(id > 0){
      this.modoDeEdicao = true;
       this.funcionarioService.findById(id).subscribe(response => {
       this.funcionarioForm = this.formBuilder.group({
        id: [response.id],      
        nome: [response.nome, Validators.required],
        email: [response.email, Validators.required], 
        telefone: [response.telefone, Validators.required], 
        perfil: [response.perfil, Validators.required], 
        login: [response.login, Validators.required], 
        senha: [response.senha, Validators.required], 

    
      })
    })
  }else{
    this.modoDeEdicao = false;
    this.funcionarioForm = this.formBuilder.group({
      id,      
      nome: ['', Validators.required],
      email: ['', Validators.required], 
      telefone: ['', Validators.required], 
      perfil: ['', Validators.required], 
      login: ['', Validators.required], 
      senha: ['', Validators.required], 

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
            this.navController.navigateForward('listagem-funcionario');
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
