import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemOsPage } from './listagem-os.page';

describe('ListagemOsPage', () => {
  let component: ListagemOsPage;
  let fixture: ComponentFixture<ListagemOsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemOsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
