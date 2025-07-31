import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAirlineComponent } from './book-airline.component';

describe('BookAirlineComponent', () => {
  let component: BookAirlineComponent;
  let fixture: ComponentFixture<BookAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
