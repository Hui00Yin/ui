import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyresumeComponent } from './fancyresume.component';

describe('FancyresumeComponent', () => {
  let component: FancyresumeComponent;
  let fixture: ComponentFixture<FancyresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
