import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoBadgeComponent } from './pano-badge.component';

describe('PanoBadgeComponent', () => {
  let component: PanoBadgeComponent;
  let fixture: ComponentFixture<PanoBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
