import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemEquipamentoPage } from './listagem-equipamento.page';

describe('ListagemEquipamentoPage', () => {
  let component: ListagemEquipamentoPage;
  let fixture: ComponentFixture<ListagemEquipamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
