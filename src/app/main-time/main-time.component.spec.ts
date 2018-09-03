import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTimeComponent } from './main-time.component';

describe('MainTimeComponent', () => {
  let component: MainTimeComponent;
  let fixture: ComponentFixture<MainTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
