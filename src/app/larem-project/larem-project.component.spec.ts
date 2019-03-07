import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaremProjectComponent } from './larem-project.component';

describe('LaremProjectComponent', () => {
  let component: LaremProjectComponent;
  let fixture: ComponentFixture<LaremProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaremProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaremProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
