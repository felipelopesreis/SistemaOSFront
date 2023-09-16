import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemClientePage } from './listagem-cliente.page';

describe('ListagemClientePage', () => {
  let component: ListagemClientePage;
  let fixture: ComponentFixture<ListagemClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
