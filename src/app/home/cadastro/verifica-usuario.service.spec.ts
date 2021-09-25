import { TestBed } from '@angular/core/testing';

import { VerificaUsuarioService } from './verifica-usuario.service';

describe('VerificaUsuarioService', () => {
  let service: VerificaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
