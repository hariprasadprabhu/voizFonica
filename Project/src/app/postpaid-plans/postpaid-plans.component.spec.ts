import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidPlansComponent } from './postpaid-plans.component';

describe('PostpaidPlansComponent', () => {
  let component: PostpaidPlansComponent;
  let fixture: ComponentFixture<PostpaidPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpaidPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
