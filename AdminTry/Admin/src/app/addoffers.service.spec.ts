import { TestBed } from '@angular/core/testing';

import { AddoffersService } from './addoffers.service';

describe('AddoffersService', () => {
  let service: AddoffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddoffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
