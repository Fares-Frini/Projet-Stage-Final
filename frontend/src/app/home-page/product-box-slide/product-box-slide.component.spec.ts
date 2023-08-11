import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxSlideComponent } from './product-box-slide.component';

describe('ProductBoxSlideComponent', () => {
  let component: ProductBoxSlideComponent;
  let fixture: ComponentFixture<ProductBoxSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBoxSlideComponent]
    });
    fixture = TestBed.createComponent(ProductBoxSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
