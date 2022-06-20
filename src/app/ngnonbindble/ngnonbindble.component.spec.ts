import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgnonbindbleComponent } from './ngnonbindble.component';

describe('NgnonbindbleComponent', () => {
  let component: NgnonbindbleComponent;
  let fixture: ComponentFixture<NgnonbindbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgnonbindbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgnonbindbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
