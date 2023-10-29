import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroEquipamentoItemPage } from './cadastro-equipamento-item.page';

describe('CadastroEquipamentoItemPage', () => {
  let component: CadastroEquipamentoItemPage;
  let fixture: ComponentFixture<CadastroEquipamentoItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroEquipamentoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
