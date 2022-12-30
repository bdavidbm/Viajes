import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightUniqueComponent } from './flight-unique.component';

describe('FlightUniqueComponent', () => {
  let component: FlightUniqueComponent;
  let fixture: ComponentFixture<FlightUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
