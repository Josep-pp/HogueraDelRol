import { TestBed } from '@angular/core/testing';

import { DescriptoresService } from './descriptores.service';

describe('DescriptoresService', () => {
  let service: DescriptoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
