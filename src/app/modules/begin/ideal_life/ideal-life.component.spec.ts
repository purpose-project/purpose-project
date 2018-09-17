import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealLifeComponent } from './ideal-life.component';

describe('IdealLifeComponent', () => {
  let component: IdealLifeComponent;
  let fixture: ComponentFixture<IdealLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
