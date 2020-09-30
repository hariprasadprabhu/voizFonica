import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidHistoryComponent } from './prepaid-history.component';

describe('PrepaidHistoryComponent', () => {
  let component: PrepaidHistoryComponent;
  let fixture: ComponentFixture<PrepaidHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
