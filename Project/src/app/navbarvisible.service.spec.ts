import { TestBed } from '@angular/core/testing';

import { NavbarvisibleService } from './navbarvisible.service';

describe('NavbarvisibleService', () => {
  let service: NavbarvisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarvisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
