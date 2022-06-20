import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { JokePageComponent } from './joke-page.component';

describe('JokePageComponent', () => {
  let component: JokePageComponent;
  let fixture: ComponentFixture<JokePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokePageComponent ],
      imports:[ReactiveFormsModule,FormsModule,AngularMaterialModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
