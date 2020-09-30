import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidhomeComponent } from './postpaidhome.component';

describe('PostpaidhomeComponent', () => {
  let component: PostpaidhomeComponent;
  let fixture: ComponentFixture<PostpaidhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpaidhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
