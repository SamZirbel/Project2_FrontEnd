import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCompComponent } from './submit-comp.component';

describe('SubmitCompComponent', () => {
  let component: SubmitCompComponent;
  let fixture: ComponentFixture<SubmitCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
