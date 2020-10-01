import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrepaidCustomerComponent } from './admin-prepaid-customer.component';

describe('AdminPrepaidCustomerComponent', () => {
  let component: AdminPrepaidCustomerComponent;
  let fixture: ComponentFixture<AdminPrepaidCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPrepaidCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrepaidCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
