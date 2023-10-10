import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FuncionarioDTO } from 'src/app/models/FuncionarioDTO';
import { FuncionarioService } from 'src/app/services/domain/funcionarioservice';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.page.html',
  styleUrls: ['./listagem-funcionario.page.scss'],
})
export class ListagemFuncionarioPage implements OnInit {

  funcionarios!: FuncionarioDTO[];

  constructor(public funcionarioService: FuncionarioService, 
            private navController: NavController,
             public menu: MenuController ) { }

             ionViewDidEnter(){
              this.funcionarioService.findAll()
                                     .subscribe({
                                        next: 
                                          (response) => this.funcionarios = response,                              
                                        error:
                                          (error) => console.log(error)
                                     });
            }
          
            cadastroFuncionario(){
              this.navController.navigateForward('cadastro-funcionario');
            }
          
            excluirFuncionario(id: number){
              this.funcionarioService.delete(id)
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
