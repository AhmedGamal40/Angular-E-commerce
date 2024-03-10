import { TestBed } from '@angular/core/testing';

import { UserAutheService } from './user-authe.service';

describe('UserAutheService', () => {
  let service: UserAutheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAutheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
