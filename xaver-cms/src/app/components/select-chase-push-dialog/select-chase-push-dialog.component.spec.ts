import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChasePushDialogComponent } from './select-chase-push-dialog.component';

describe('SelectChasePushDialogComponent', () => {
  let component: SelectChasePushDialogComponent;
  let fixture: ComponentFixture<SelectChasePushDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChasePushDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChasePushDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
