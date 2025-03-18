import { TestBed } from '@angular/core/testing';

import { LoguinAdminService } from './loguin-admin.service';

describe('LoguinAdminService', () => {
  let service: LoguinAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguinAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
