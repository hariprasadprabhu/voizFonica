import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostpaidCustomerComponent } from './admin-postpaid-customer.component';

describe('AdminPostpaidCustomerComponent', () => {
  let component: AdminPostpaidCustomerComponent;
  let fixture: ComponentFixture<AdminPostpaidCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostpaidCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostpaidCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
