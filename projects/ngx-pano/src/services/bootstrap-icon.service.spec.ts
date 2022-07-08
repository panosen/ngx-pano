import { TestBed } from '@angular/core/testing';

import { BootstrapIconService } from './bootstrap-icon.service';

describe('BootstrapIconService', () => {
  let service: BootstrapIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootstrapIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
