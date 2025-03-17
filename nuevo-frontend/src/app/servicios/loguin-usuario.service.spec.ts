import { TestBed } from '@angular/core/testing';

import { LoguinUsuarioService } from './loguin-usuario.service';

describe('LoguinUsuarioService', () => {
  let service: LoguinUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoguinUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
