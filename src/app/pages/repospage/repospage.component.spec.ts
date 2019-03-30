import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepospageComponent } from './repospage.component';

describe('RepospageComponent', () => {
  let component: RepospageComponent;
  let fixture: ComponentFixture<RepospageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepospageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
