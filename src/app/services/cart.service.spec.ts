import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http post to addcart endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.addToCart({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/addToCart', {
      data: 'test',
    });
  });

  it('should call get cart endpoint with ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.getCart({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/getCartByUserId', {
      data: 'test',
    });
  });

  it('should call http post to remove from cart endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.removeFromCart({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/removeFromCart', {
      data: 'test',
    });
  });

  it('should call http post to addcart endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.emptyCart({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/emptyCart', {
      data: 'test',
    });
  });
});
