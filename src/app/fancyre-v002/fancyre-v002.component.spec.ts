import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyreV002Component } from './fancyre-v002.component';

describe('FancyreV002Component', () => {
  let component: FancyreV002Component;
  let fixture: ComponentFixture<FancyreV002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyreV002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyreV002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
