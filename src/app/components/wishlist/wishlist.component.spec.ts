import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { By } from '@angular/platform-browser';
import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [WishlistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    component.browserStorageUtil.localStorageUtil.getEntry = jasmine
      .createSpy()
      .and.returnValue({ userId: 'suresh0608' });
    component.wishlistItems = [{ name: 'test', price: 1, imageUrl: 'testUrl' }];
    component.wishlistService.removeFromWishlist = jasmine.createSpy();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch userData from local storage', () => {
    expect(component.userData).toEqual({ userId: 'suresh0608' });
  });

  it('should call addToWishlist service on clicking on Add to cart button', () => {
    let button = fixture.debugElement.query(By.css('[data-aq="btnRemove"]'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.wishlistService.removeFromWishlist).toHaveBeenCalled();
  });
});
