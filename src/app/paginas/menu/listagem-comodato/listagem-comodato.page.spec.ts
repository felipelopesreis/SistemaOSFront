import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemComodatoPage } from './listagem-comodato.page';

describe('ListagemComodatoPage', () => {
  let component: ListagemComodatoPage;
  let fixture: ComponentFixture<ListagemComodatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemComodatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
