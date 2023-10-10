import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemFuncionarioPage } from './listagem-funcionario.page';

describe('ListagemFuncionarioPage', () => {
  let component: ListagemFuncionarioPage;
  let fixture: ComponentFixture<ListagemFuncionarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemFuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
