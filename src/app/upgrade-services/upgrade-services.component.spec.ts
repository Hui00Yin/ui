import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeServicesComponent } from './upgrade-services.component';

describe('UpgradeServicesComponent', () => {
  let component: UpgradeServicesComponent;
  let fixture: ComponentFixture<UpgradeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
