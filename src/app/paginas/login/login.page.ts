import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, 
    public menu: MenuController) { }

  logar(){
      this.nav.navigateForward('/tabs/tab2')
  }

  registrar(){
      this.nav.navigateForward('add-associado')
  }

  ionViewWillEnter(){
    this.menu.enable(false);
    }
    
    ionViewDidLeave(){
      this.menu.enable(true);
      }      

  ngOnInit() {
  }

}
