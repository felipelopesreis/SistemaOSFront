import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoOsFechadaPage } from './cartao-os-fechada.page';

describe('CartaoOsFechadaPage', () => {
  let component: CartaoOsFechadaPage;
  let fixture: ComponentFixture<CartaoOsFechadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartaoOsFechadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
