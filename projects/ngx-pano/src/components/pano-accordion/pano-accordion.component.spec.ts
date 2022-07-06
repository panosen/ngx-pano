import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoAccordionComponent } from './pano-accordion.component';

describe('PanoAccordionComponent', () => {
  let component: PanoAccordionComponent;
  let fixture: ComponentFixture<PanoAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
