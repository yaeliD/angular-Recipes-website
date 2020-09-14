import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReciposComponent } from './all-recipos.component';

describe('AllReciposComponent', () => {
  let component: AllReciposComponent;
  let fixture: ComponentFixture<AllReciposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReciposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReciposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
