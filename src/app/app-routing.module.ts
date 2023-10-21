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
    path: 'cadastro-cliente/:id',
    loadChildren: () => import('./paginas/menu/cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
 
  {
    path: 'cadastro-os/:id',
    loadChildren: () => import('./paginas/menu/cadastro-os/cadastro-os.module').then( m => m.CadastroOsPageModule)
  },
  {
    path: 'listagem-cliente',
    loadChildren: () => import('./paginas/menu/listagem-cliente/listagem-cliente.module').then( m => m.ListagemClientePageModule)
  },
  {
    path: 'cartao-listagem-os',
    loadChildren: () => import('./paginas/home/cartao-listagem-os/cartao-listagem-os.module').then( m => m.CartaoListagemOsPageModule)
  },
  {
    path: 'tecnicos-atendimento',
    loadChildren: () => import('./paginas/home/tecnicos-atendimento/tecnicos-atendimento.module').then( m => m.TecnicosAtendimentoPageModule)
  },
  {
    path: 'cadastro-funcionario/:id',
    loadChildren: () => import('./paginas/menu/cadastro-funcionario/cadastro-funcionario.module').then( m => m.CadastroFuncionarioPageModule)
  },
  {
    path: 'listagem-funcionario',
    loadChildren: () => import('./paginas/menu/listagem-funcionario/listagem-funcionario.module').then( m => m.ListagemFuncionarioPageModule)
  },
  {
    path: 'listagem-os',
    loadChildren: () => import('./paginas/menu/listagem-os/listagem-os.module').then( m => m.ListagemOsPageModule)
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
