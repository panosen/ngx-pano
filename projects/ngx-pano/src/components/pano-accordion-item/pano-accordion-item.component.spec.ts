import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAccordionItemComponent } from './pano-accordion-item.component';

describe('PanoAccordionItemComponent', () => {
  let component: PanoAccordionItemComponent;
  let fixture: ComponentFixture<PanoAccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAccordionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
