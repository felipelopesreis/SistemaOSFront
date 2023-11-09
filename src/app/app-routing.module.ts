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
  },
  {
    path: 'cadastro-atendimento/:id',
    loadChildren: () => import('./paginas/menu/cadastro-atendimento/cadastro-atendimento.module').then( m => m.CadastroAtendimentoPageModule)
  },
  {
    path: 'listagem-atendimento',
    loadChildren: () => import('./paginas/menu/listagem-atendimento/listagem-atendimento.module').then( m => m.ListagemAtendimentoPageModule)
  },
  {
    path: 'equipamento-crud/:id',
    loadChildren: () => import('./paginas/menu/equipamento/equipamento-crud/equipamento-crud.module').then( m => m.EquipamentoCrudPageModule)
  },
  {
    path: 'listagem-equipamento',
    loadChildren: () => import('./paginas/menu/equipamento/listagem-equipamento/listagem-equipamento.module').then( m => m.ListagemEquipamentoPageModule)
  },
  {
    path: 'cadastro-equipamento-item',
    loadChildren: () => import('./paginas/menu/equipamento/cadastro-equipamento-item/cadastro-equipamento-item.module').then( m => m.CadastroEquipamentoItemPageModule)
  },
  {
    path: 'listagem-all',
    loadChildren: () => import('./paginas/menu/listagem-all/listagem-all.module').then( m => m.ListagemAllPageModule)
  },
  {
    path: 'cadastro-comodato/:id',
    loadChildren: () => import('./paginas/menu/cadastro-comodato/cadastro-comodato.module').then( m => m.CadastroComodatoPageModule)
  },
  {
    path: 'listagem-comodato',
    loadChildren: () => import('./paginas/menu/listagem-comodato/listagem-comodato.module').then( m => m.ListagemComodatoPageModule)
  },
  {
    path: 'cartao-os-fechada',
    loadChildren: () => import('./paginas/home/cartao-os-fechada/cartao-os-fechada.module').then( m => m.CartaoOsFechadaPageModule)
  },
  {
    path: 'listagem-equipamento-item',
    loadChildren: () => import('./paginas/menu/equipamento/listagem-equipamento-item/listagem-equipamento-item.module').then( m => m.ListagemEquipamentoItemPageModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('./paginas/home/graficos/graficos.module').then( m => m.GraficosPageModule)
  }









];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
