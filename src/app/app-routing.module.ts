import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./paginas/menu/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },  {
    path: 'cadastro-os',
    loadChildren: () => import('./paginas/menu/cadastro-os/cadastro-os.module').then( m => m.CadastroOsPageModule)
  },
  {
    path: 'listagem-cliente',
    loadChildren: () => import('./paginas/menu/listagem-cliente/listagem-cliente.module').then( m => m.ListagemClientePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
