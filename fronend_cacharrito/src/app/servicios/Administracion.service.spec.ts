import { TestBed } from '@angular/core/testing';

import { AdministradorService } from './Administrador.service';

describe('Administrador', () => {
  let service: AdministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
