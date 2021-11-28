import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BrowserUtilService } from './browser-util.service';

describe('BrowserUtilService', () => {
  let service: BrowserUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BrowserUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
