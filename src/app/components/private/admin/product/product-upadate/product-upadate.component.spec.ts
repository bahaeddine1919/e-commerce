import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpadateComponent } from './product-upadate.component';

describe('ProductUpadateComponent', () => {
  let component: ProductUpadateComponent;
  let fixture: ComponentFixture<ProductUpadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpadateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
