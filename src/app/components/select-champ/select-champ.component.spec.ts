import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChampComponent } from './select-champ.component';

describe('SelectChampComponent', () => {
  let component: SelectChampComponent;
  let fixture: ComponentFixture<SelectChampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectChampComponent]
    });
    fixture = TestBed.createComponent(SelectChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
