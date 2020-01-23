import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLocalvComponent } from './child-localv.component';

describe('ChildLocalvComponent', () => {
  let component: ChildLocalvComponent;
  let fixture: ComponentFixture<ChildLocalvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLocalvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLocalvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
