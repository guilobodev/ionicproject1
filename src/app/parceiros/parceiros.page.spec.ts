import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParceirosPage } from './parceiros.page';

describe('ParceirosPage', () => {
  let component: ParceirosPage;
  let fixture: ComponentFixture<ParceirosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
