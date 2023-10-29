import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AtendimentoDTO } from 'src/app/models/AtendimentoDTO';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { AtendimentoService } from 'src/app/services/domain/atendimentoservice';
import { ClienteService } from 'src/app/services/domain/clienteservice';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-cadastro-os',
  templateUrl: './cadastro-os.page.html',
  styleUrls: ['./cadastro-os.page.scss'],
})
export class CadastroOsPage implements OnInit {

  public modoDeEdicao = false;

  
  clientes!: ClienteDTO[];
  ordemServico!: OrdemServicoDTO;
  ordemServicoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public clienteService: ClienteService,
    public ordemServicoService: OrdemServicoService,
    private route: ActivatedRoute,
    private navController: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if(id > 0){
      this.modoDeEdicao = true;
       this.ordemServicoService.findById(id).subscribe(response => {
       this.ordemServicoForm = this.formBuilder.group({
        id: [response.id],      
        titulo: [response.titulo, Validators.required],
        dataAbertura: [response.dataAbertura, Validators.required], 
        dataFechamento: [response.dataFechamento, Validators.required], 
        tipoServico: [response.tipoServico, Validators.required], 
        prioridade: [response.prioridade, Validators.required], 
        status: [response.status, Validators.required], 
        cliente: [response.cliente, Validators.required]
      })
    })
  }else{
    this.modoDeEdicao = false;

    this.ordemServicoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      dataAbertura: ['', Validators.required],
      dataFechamento: ['', Validators.required],
      tipoServico: ['', Validators.required],
      prioridade: ['', Validators.required],
      status: ['', Validators.required],
      cliente: ['', Validators.required]
    })
  }
  }

 

  submit(){
    let ordemServico = {
      'titulo': this.ordemServicoForm.value.titulo,
      'dataAbertura': this.ordemServicoForm.value.dataAbertura,
      'dataFechamento': this.ordemServicoForm.value.dataFechamento,
      'tipoServico' : this.ordemServicoForm.value.tipoServico,
      'prioridade': this.ordemServicoForm.value.prioridade,
      'status': this.ordemServicoForm.value.status,
      'cliente': {
        'id': this.ordemServicoForm.value.cliente
      }
    }

    if(!this.modoDeEdicao){
    this.ordemServicoService.insert(ordemServico)
                               .subscribe(response => {
                                  this.presentAlert('Sucesso',
                                    'A OS foi salvo com sucesso', ['Ok'])
                               })
      }

      if(this.modoDeEdicao){
        this.ordemServicoService.update(this.ordemServicoForm.value)
        .subscribe(response => {
         this.presentAlert('Sucesso',
           'A OS foi atualizado com sucesso',
           ['Ok'])
        })
    }

  }

  ionViewDidEnter(){
    this.clienteService.findAll().subscribe({
      next: (response) => this.clientes = response,
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
