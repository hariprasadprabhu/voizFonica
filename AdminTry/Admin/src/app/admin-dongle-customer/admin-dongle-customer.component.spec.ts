import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDongleCustomerComponent } from './admin-dongle-customer.component';

describe('AdminDongleCustomerComponent', () => {
  let component: AdminDongleCustomerComponent;
  let fixture: ComponentFixture<AdminDongleCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDongleCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDongleCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
