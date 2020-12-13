import { TestBed } from '@angular/core/testing';

import { ServiceCategoriaService } from './service-categoria.service';

describe('ServiceCategoriaService', () => {
  let service: ServiceCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
