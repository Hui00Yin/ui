import { TestBed, inject } from '@angular/core/testing';

import { SelectHostService } from './select-host.service';

describe('SelectHostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectHostService]
    });
  });

  it('should be created', inject([SelectHostService], (service: SelectHostService) => {
    expect(service).toBeTruthy();
  }));
});
