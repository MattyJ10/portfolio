import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvcProjectComponent } from './lvc-project.component';

describe('LvcProjectComponent', () => {
  let component: LvcProjectComponent;
  let fixture: ComponentFixture<LvcProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvcProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
