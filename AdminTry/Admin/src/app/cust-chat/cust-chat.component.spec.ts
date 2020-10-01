import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustChatComponent } from './cust-chat.component';

describe('CustChatComponent', () => {
  let component: CustChatComponent;
  let fixture: ComponentFixture<CustChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
