import { TestBed, inject } from '@angular/core/testing';

import { SelectProductsService } from './select-products.service';

describe('SelectProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectProductsService]
    });
  });

  it('should be created', inject([SelectProductsService], (service: SelectProductsService) => {
    expect(service).toBeTruthy();
  }));
});
