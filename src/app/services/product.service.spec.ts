import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call http get req to get products endpoint ', () => {
    service.url = 'test';
    service.http.get = jasmine.createSpy();
    service.getProducts();
    expect(service.http.get).toHaveBeenCalledWith('test/getItems');
  });
});
