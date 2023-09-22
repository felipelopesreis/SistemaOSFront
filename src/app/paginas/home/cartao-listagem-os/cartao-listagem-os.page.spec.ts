import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoListagemOsPage } from './cartao-listagem-os.page';

describe('CartaoListagemOsPage', () => {
  let component: CartaoListagemOsPage;
  let fixture: ComponentFixture<CartaoListagemOsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartaoListagemOsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
