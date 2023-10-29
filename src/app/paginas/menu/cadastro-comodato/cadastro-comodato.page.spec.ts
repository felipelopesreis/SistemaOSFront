import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComodatoPage } from './cadastro-comodato.page';

describe('CadastroComodatoPage', () => {
  let component: CadastroComodatoPage;
  let fixture: ComponentFixture<CadastroComodatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroComodatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
