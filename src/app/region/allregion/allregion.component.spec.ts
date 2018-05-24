import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllregionComponent } from './allregion.component';

describe('AllregionComponent', () => {
  let component: AllregionComponent;
  let fixture: ComponentFixture<AllregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
