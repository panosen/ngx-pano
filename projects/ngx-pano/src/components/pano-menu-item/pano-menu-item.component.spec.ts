import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoMenuItemComponent } from './pano-menu-item.component';

describe('PanoMenuItemComponent', () => {
  let component: PanoMenuItemComponent;
  let fixture: ComponentFixture<PanoMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
