import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeComponent } from '../joke/joke.component';

import { JokeFormComponent } from './joke-form.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

describe('JokeFormComponent', () => {
  let component: JokeFormComponent;
  let fixture: ComponentFixture<JokeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeFormComponent, JokeComponent],
      imports:[BrowserAnimationsModule,FormsModule,ReactiveFormsModule,AngularMaterialModule],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
