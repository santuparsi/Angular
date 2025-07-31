import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAirlineComponent } from './search-airline.component';

describe('SearchAirlineComponent', () => {
  let component: SearchAirlineComponent;
  let fixture: ComponentFixture<SearchAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
