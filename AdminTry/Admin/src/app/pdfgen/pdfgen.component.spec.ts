import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfgenComponent } from './pdfgen.component';

describe('PdfgenComponent', () => {
  let component: PdfgenComponent;
  let fixture: ComponentFixture<PdfgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
