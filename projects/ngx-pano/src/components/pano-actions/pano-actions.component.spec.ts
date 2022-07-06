import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoActionsComponent } from './pano-actions.component';

describe('PanoActionsComponent', () => {
  let component: PanoActionsComponent;
  let fixture: ComponentFixture<PanoActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
