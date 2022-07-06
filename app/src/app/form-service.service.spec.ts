import { TestBed } from '@angular/core/testing';

import { FormServiceService } from './form-service.service';

describe('FormServiceService', () => {
  let service: FormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
