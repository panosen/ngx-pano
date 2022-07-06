import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAccordionItemBodyComponent } from './pano-accordion-item-body.component';

describe('PanoAccordionItemBodyComponent', () => {
  let component: PanoAccordionItemBodyComponent;
  let fixture: ComponentFixture<PanoAccordionItemBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAccordionItemBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAccordionItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
