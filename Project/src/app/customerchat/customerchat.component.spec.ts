import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerchatComponent } from './customerchat.component';

describe('CustomerchatComponent', () => {
  let component: CustomerchatComponent;
  let fixture: ComponentFixture<CustomerchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
