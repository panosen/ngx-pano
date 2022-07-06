import { TestBed } from '@angular/core/testing';

import { PanoSidebarToggleService } from './pano-sidebar-toggle.service';

describe('PanoSidebarToggleService', () => {
  let service: PanoSidebarToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanoSidebarToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
