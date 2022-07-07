import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoMenuComponent } from './pano-menu.component';

describe('PanoMenuComponent', () => {
  let component: PanoMenuComponent;
  let fixture: ComponentFixture<PanoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
