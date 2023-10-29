import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemAtendimentoPage } from './listagem-atendimento.page';

describe('ListagemAtendimentoPage', () => {
  let component: ListagemAtendimentoPage;
  let fixture: ComponentFixture<ListagemAtendimentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
