import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidPlansComponent } from './prepaid-plans.component';

describe('PrepaidPlansComponent', () => {
  let component: PrepaidPlansComponent;
  let fixture: ComponentFixture<PrepaidPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
