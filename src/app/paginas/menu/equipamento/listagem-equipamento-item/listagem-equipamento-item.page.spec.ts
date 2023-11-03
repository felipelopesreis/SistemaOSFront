import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemEquipamentoItemPage } from './listagem-equipamento-item.page';

describe('ListagemEquipamentoItemPage', () => {
  let component: ListagemEquipamentoItemPage;
  let fixture: ComponentFixture<ListagemEquipamentoItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemEquipamentoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
