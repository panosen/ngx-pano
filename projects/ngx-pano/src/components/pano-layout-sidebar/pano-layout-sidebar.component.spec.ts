import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoLayoutSidebarComponent } from './pano-layout-sidebar.component';

describe('PanoLayoutSidebarComponent', () => {
  let component: PanoLayoutSidebarComponent;
  let fixture: ComponentFixture<PanoLayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoLayoutSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanoLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
