import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoContextMenuComponent } from './pano-context-menu.component';

describe('PanoContextMenuComponent', () => {
  let component: PanoContextMenuComponent;
  let fixture: ComponentFixture<PanoContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoContextMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
