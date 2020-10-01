import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBoughtComponent } from './plan-bought.component';

describe('PlanBoughtComponent', () => {
  let component: PlanBoughtComponent;
  let fixture: ComponentFixture<PlanBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
