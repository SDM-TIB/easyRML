import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicateobjectmapComponent } from './predicateobjectmap.component';

describe('PredicateobjectmapComponent', () => {
  let component: PredicateobjectmapComponent;
  let fixture: ComponentFixture<PredicateobjectmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredicateobjectmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredicateobjectmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
