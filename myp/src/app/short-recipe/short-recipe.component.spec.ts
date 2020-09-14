import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRecipeComponent } from './short-recipe.component';

describe('ShortRecipeComponent', () => {
  let component: ShortRecipeComponent;
  let fixture: ComponentFixture<ShortRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
