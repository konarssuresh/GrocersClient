import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';

describe('WishlistService', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make post req to get wishlist endpoint', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.getWishlist({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/getWishlistByUserId', {
      data: 'test',
    });
  });
  it('should make post req to add to wishlist endpoint', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.addToWishlist({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/addToWishlist', {
      data: 'test',
    });
  });

  it('should make post req to remove from wishlist endpoint', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.removeFromWishlist({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/removeFromWishlist', {
      data: 'test',
    });
  });
});
