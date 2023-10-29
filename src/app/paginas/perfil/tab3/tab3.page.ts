import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{

  constructor(public nav: NavController, 
    public menu: MenuController) {}


    sair(){
      this.nav.navigateForward('/login')
  }

  ngOnInit() {
  }

}
