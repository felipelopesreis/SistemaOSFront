import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipamentoCrudPage } from './equipamento-crud.page';

describe('EquipamentoCrudPage', () => {
  let component: EquipamentoCrudPage;
  let fixture: ComponentFixture<EquipamentoCrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EquipamentoCrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
