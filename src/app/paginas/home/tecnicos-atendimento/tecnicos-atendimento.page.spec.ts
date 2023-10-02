import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicosAtendimentoPage } from './tecnicos-atendimento.page';

describe('TecnicosAtendimentoPage', () => {
  let component: TecnicosAtendimentoPage;
  let fixture: ComponentFixture<TecnicosAtendimentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicosAtendimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
