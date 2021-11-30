import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [OrdersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    component.browserStorageUtil.localStorageUtil.getEntry = jasmine
      .createSpy()
      .and.returnValue({});
    component.router.navigateByUrl = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login page if user is not logged in', () => {
    expect(component.router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
