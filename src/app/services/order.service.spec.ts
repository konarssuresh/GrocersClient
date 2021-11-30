import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http post to place order endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.placeOrder({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/placeOrder', {
      data: 'test',
    });
  });

  it('should call http post to get orders endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.getOrdersByUserId({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/getOrders', {
      data: 'test',
    });
  });
});
