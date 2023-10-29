import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAtendimentoPage } from './cadastro-atendimento.page';

describe('CadastroAtendimentoPage', () => {
  let component: CadastroAtendimentoPage;
  let fixture: ComponentFixture<CadastroAtendimentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
