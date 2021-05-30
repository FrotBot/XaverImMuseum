import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChaseDialogComponent } from './select-chase-dialog.component';

describe('SelectChaseDialogComponent', () => {
  let component: SelectChaseDialogComponent;
  let fixture: ComponentFixture<SelectChaseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChaseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
