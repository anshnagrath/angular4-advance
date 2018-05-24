import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleregionComponent } from './singleregion.component';

describe('SingleregionComponent', () => {
  let component: SingleregionComponent;
  let fixture: ComponentFixture<SingleregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
