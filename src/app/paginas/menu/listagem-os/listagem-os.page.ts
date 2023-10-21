import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { OrdemServicoDTO } from 'src/app/models/OrdemServicoDTO';
import { ClienteService } from 'src/app/services/domain/clienteservice';
import { OrdemServicoService } from 'src/app/services/domain/ordemservico.service';

@Component({
  selector: 'app-listagem-os',
  templateUrl: './listagem-os.page.html',
  styleUrls: ['./listagem-os.page.scss'],
})
export class ListagemOsPage implements OnInit {
  clientes!: ClienteDTO[];
  ordemServicos!: OrdemServicoDTO[];
  ordemServicoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public clienteService: ClienteService,
    public ordemServicoService: OrdemServicoService,
    public alertController: AlertController) { }

  ionViewDidEnter(){
    this.ordemServicoService.findAll()
                           .subscribe({
                              next: 
                                (response) => this.ordemServicos = response,                              
                              error:
                                (error) => console.log(error)
                           });

                          
                            this.clienteService.findAll().subscribe({
                              next: (response) => this.clientes = response,
                              error: (error) => console.log(error)
                            });
                          

                           
  }

  excluirOrdemServico(id: number){
    this.ordemServicoService.delete(id)
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
