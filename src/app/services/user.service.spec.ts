import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http post to add users endpoint ', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.addUser({ data: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/signUp', {
      data: 'test',
    });
  });

  it('should make http post req to login endpoint', () => {
    service.url = 'test';
    service.http.post = jasmine.createSpy();
    service.loginUser({ userId: 'test', password: 'test' });
    expect(service.http.post).toHaveBeenCalledWith('test/login', {
      userId: 'test',
      password: 'test',
    });
  });
});
