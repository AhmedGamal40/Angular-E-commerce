import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUserLoginGuard } from './auth-user-login.guard';

describe('authUserLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUserLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
