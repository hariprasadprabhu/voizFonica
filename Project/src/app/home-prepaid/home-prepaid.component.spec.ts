import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrepaidComponent } from './home-prepaid.component';

describe('HomePrepaidComponent', () => {
  let component: HomePrepaidComponent;
  let fixture: ComponentFixture<HomePrepaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrepaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
