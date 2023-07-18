import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSummaryComponent } from './customer-summary.component';

describe('CustomerSummaryComponent', () => {
  let component: CustomerSummaryComponent;
  let fixture: ComponentFixture<CustomerSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSummaryComponent]
    });
    fixture = TestBed.createComponent(CustomerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
