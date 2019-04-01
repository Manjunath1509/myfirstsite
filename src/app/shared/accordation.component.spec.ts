import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordationComponent } from './accordation.component';

describe('AccordationComponent', () => {
  let component: AccordationComponent;
  let fixture: ComponentFixture<AccordationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
