import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLocalvComponent } from './parent-localv.component';

describe('ParentLocalvComponent', () => {
  let component: ParentLocalvComponent;
  let fixture: ComponentFixture<ParentLocalvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLocalvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLocalvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
