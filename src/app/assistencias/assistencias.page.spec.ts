import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistenciasPage } from './assistencias.page';

describe('AssistenciasPage', () => {
  let component: AssistenciasPage;
  let fixture: ComponentFixture<AssistenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
