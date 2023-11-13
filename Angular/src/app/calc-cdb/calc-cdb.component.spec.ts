import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcCdbComponent } from './calc-cdb.component';

describe('CalcCdbComponent', () => {
  let component: CalcCdbComponent;
  let fixture: ComponentFixture<CalcCdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcCdbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcCdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
