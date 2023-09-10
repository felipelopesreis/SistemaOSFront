import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  constructor(public nav: NavController,public menu: MenuController ) { }


  voltar(){
    this.nav.navigateForward('tabs/tab1')
}

  ngOnInit() {
  }

}
