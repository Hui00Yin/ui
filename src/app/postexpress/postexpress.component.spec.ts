import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostexpressComponent } from './postexpress.component';

describe('PostexpressComponent', () => {
  let component: PostexpressComponent;
  let fixture: ComponentFixture<PostexpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostexpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
