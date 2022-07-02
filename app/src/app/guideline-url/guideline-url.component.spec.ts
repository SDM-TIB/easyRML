import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineUrlComponent } from './guideline-url.component';

describe('GuidelineUrlComponent', () => {
  let component: GuidelineUrlComponent;
  let fixture: ComponentFixture<GuidelineUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidelineUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
