import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalariesComponent } from './emp-salaries.component';

describe('EmpSalariesComponent', () => {
  let component: EmpSalariesComponent;
  let fixture: ComponentFixture<EmpSalariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSalariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
