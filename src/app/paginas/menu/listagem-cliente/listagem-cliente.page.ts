import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ClienteDTO } from 'src/app/models/ClienteDTO';
import { ClienteService } from 'src/app/services/domain/clienteservice';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.page.html',
  styleUrls: ['./listagem-cliente.page.scss'],
})
export class ListagemClientePage implements OnInit {

  clientes!: ClienteDTO[];

  constructor(public clienteService: ClienteService, 
            private navController: NavController,
             public menu: MenuController ) { }

             ionViewDidEnter(){
              this.clienteService.findAll()
                                     .subscribe({
                                        next: 
                                          (response) => this.clientes = response,                              
                                        error:
                                          (error) => console.log(error)
                                     });
            }
          
            cadastroCliente(){
              this.navController.navigateForward('cadastro-cliente');
            }
          
            excluirCliente(id: number){
              this.clienteService.delete(id)
                                     .subscribe({
                                        next: 
                                          (response) => window.location.reload(),                              
                                        error:
                                          (error) => console.log(error)
                                     });
            }

  voltar(){
    this.navController.navigateForward('tabs/tab1')
}



  ngOnInit() {
  
  }
}
