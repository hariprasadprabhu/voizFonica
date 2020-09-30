import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidhomeComponent } from './prepaidhome.component';

describe('PrepaidhomeComponent', () => {
  let component: PrepaidhomeComponent;
  let fixture: ComponentFixture<PrepaidhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
