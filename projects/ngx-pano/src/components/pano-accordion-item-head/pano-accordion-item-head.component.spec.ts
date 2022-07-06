import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAccordionItemHeadComponent } from './pano-accordion-item-head.component';

describe('PanoAccordionItemHeadComponent', () => {
  let component: PanoAccordionItemHeadComponent;
  let fixture: ComponentFixture<PanoAccordionItemHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAccordionItemHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAccordionItemHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
