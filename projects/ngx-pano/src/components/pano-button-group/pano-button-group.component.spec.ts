import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoButtonGroupComponent } from './pano-button-group.component';

describe('PanoButtonGroupComponent', () => {
  let component: PanoButtonGroupComponent;
  let fixture: ComponentFixture<PanoButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
