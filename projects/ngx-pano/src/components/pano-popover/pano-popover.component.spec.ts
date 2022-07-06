import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoPopoverComponent } from './pano-popover.component';

describe('PanoPopoverComponent', () => {
  let component: PanoPopoverComponent;
  let fixture: ComponentFixture<PanoPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoPopoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
