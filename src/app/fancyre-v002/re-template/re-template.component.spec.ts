import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReTemplateComponent } from './re-template.component';

describe('ReTemplateComponent', () => {
  let component: ReTemplateComponent;
  let fixture: ComponentFixture<ReTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
