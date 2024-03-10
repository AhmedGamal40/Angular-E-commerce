import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondComponent } from './not-fond.component';

describe('NotFondComponent', () => {
  let component: NotFondComponent;
  let fixture: ComponentFixture<NotFondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFondComponent]
    });
    fixture = TestBed.createComponent(NotFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
