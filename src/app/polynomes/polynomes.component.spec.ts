import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolynomesComponent } from './polynomes.component';

describe('PolynomesComponent', () => {
  let component: PolynomesComponent;
  let fixture: ComponentFixture<PolynomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolynomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolynomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
