import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroOsPage } from './cadastro-os.page';

describe('CadastroOsPage', () => {
  let component: CadastroOsPage;
  let fixture: ComponentFixture<CadastroOsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroOsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
