import { TestBed } from '@angular/core/testing';

import { ModificarcontraService } from './modificarcontra.service';

describe('ModificarcontraService', () => {
  let service: ModificarcontraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarcontraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
