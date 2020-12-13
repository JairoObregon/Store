import { TestBed } from '@angular/core/testing';

import { GuardregistrousuarioGuard } from './guardregistrousuario.guard';

describe('GuardregistrousuarioGuard', () => {
  let guard: GuardregistrousuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardregistrousuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
