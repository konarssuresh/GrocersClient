import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DescriptionPipe } from 'src/app/pipes/description.pipe';
import { FilterProductPipe } from 'src/app/pipes/filter-product.pipe';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [ProductsComponent, FilterProductPipe, DescriptionPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    component.browserStorageUtil.localStorageUtil.getEntry = jasmine
      .createSpy()
      .and.returnValue({ userId: 'suresh0608' });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user data from store and save', () => {
    expect(component.userData).toEqual({ userId: 'suresh0608' });
  });
});
