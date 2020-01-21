import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCompComponent } from './books-comp.component';

describe('BooksCompComponent', () => {
  let component: BooksCompComponent;
  let fixture: ComponentFixture<BooksCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
