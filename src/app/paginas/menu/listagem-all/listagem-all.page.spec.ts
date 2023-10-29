import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemAllPage } from './listagem-all.page';

describe('ListagemAllPage', () => {
  let component: ListagemAllPage;
  let fixture: ComponentFixture<ListagemAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
