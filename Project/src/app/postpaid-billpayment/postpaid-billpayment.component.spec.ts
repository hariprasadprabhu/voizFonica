import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidBillpaymentComponent } from './postpaid-billpayment.component';

describe('PostpaidBillpaymentComponent', () => {
  let component: PostpaidBillpaymentComponent;
  let fixture: ComponentFixture<PostpaidBillpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpaidBillpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidBillpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
