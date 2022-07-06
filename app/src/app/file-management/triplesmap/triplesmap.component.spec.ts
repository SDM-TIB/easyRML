import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplesmapComponent } from './triplesmap.component';

describe('TriplesmapComponent', () => {
  let component: TriplesmapComponent;
  let fixture: ComponentFixture<TriplesmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriplesmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplesmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
