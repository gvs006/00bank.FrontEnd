import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtInfoComponent } from './debt-info.component';

describe('DebtInfoComponent', () => {
  let component: DebtInfoComponent;
  let fixture: ComponentFixture<DebtInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtInfoComponent]
    });
    fixture = TestBed.createComponent(DebtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
