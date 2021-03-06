import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSolutionComponent } from './provide-solution.component';

describe('ProvideSolutionComponent', () => {
  let component: ProvideSolutionComponent;
  let fixture: ComponentFixture<ProvideSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
