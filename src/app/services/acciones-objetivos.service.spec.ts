import { TestBed } from '@angular/core/testing';

import { AccionesObjetivosService } from './acciones-objetivos.service';

describe('AccionesObjetivosService', () => {
  let service: AccionesObjetivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccionesObjetivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
