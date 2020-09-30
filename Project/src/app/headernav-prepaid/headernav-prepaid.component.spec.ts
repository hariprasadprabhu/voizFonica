import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavPrepaidComponent } from './headernav-prepaid.component';

describe('HeadernavPrepaidComponent', () => {
  let component: HeadernavPrepaidComponent;
  let fixture: ComponentFixture<HeadernavPrepaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernavPrepaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernavPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
