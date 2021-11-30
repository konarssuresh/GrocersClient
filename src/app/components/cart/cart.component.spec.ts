import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [CartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    component.browserStorageUtil.localStorageUtil.getEntry = jasmine
      .createSpy()
      .and.returnValue({ userId: 'suresh0608' });
    component.cartItems = [
      { name: 'test', price: 1, imageUrl: 'testUrl', quantity: 1 },
    ];
    component.onPlaceOrder = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch userData from local storage', () => {
    expect(component.userData).toEqual({ userId: 'suresh0608' });
  });

  it('should call onPlaceOrder on button click', () => {
    let button = fixture.debugElement.query(By.css('[data-aq="placeOrder"]'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onPlaceOrder).toHaveBeenCalled();
  });

  it('should call onAddMore on click on add more button', () => {
    component.onAddMore = jasmine.createSpy();
    let button = fixture.debugElement.query(By.css('[data-aq="addButton"]'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onAddMore).toHaveBeenCalled();
  });

  it('should call onRemove on click on remove button', () => {
    component.onRemove = jasmine.createSpy();
    let button = fixture.debugElement.query(By.css('[data-aq="removeButton"]'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onRemove).toHaveBeenCalled();
  });
});
