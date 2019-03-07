import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorDesignProjectComponent } from './senior-design-project.component';

describe('SeniorDesignProjectComponent', () => {
  let component: SeniorDesignProjectComponent;
  let fixture: ComponentFixture<SeniorDesignProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorDesignProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorDesignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
