import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAppleComponent } from './pages-apple.component';

describe('PagesAppleComponent', () => {
  let component: PagesAppleComponent;
  let fixture: ComponentFixture<PagesAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAppleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
