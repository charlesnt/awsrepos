import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionComponent } from './substraction.component';

describe('SubstractionComponent', () => {
  let component: SubstractionComponent;
  let fixture: ComponentFixture<SubstractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
