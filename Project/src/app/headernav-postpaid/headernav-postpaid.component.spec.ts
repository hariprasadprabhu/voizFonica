import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavPostpaidComponent } from './headernav-postpaid.component';

describe('HeadernavPostpaidComponent', () => {
  let component: HeadernavPostpaidComponent;
  let fixture: ComponentFixture<HeadernavPostpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernavPostpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernavPostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
