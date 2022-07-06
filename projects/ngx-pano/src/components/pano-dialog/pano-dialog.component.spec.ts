import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoDialogComponent } from './pano-dialog.component';

describe('PanoDialogComponent', () => {
  let component: PanoDialogComponent;
  let fixture: ComponentFixture<PanoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
