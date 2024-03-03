import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAplpyFieldComponent } from './no-aplpy-field.component';

describe('NoAplpyFieldComponent', () => {
  let component: NoAplpyFieldComponent;
  let fixture: ComponentFixture<NoAplpyFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoAplpyFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoAplpyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
