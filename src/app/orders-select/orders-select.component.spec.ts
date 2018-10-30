import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSelectComponent } from './orders-select.component';

describe('OrdersSelectComponent', () => {
  let component: OrdersSelectComponent;
  let fixture: ComponentFixture<OrdersSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
