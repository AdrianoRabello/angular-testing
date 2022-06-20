import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let elEmail:DebugElement;
  let elPassword:DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports:[ ReactiveFormsModule, FormsModule, AngularMaterialModule, BrowserAnimationsModule ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    elEmail = fixture.debugElement.query(By.css('input[type="email"]'));
    elPassword = fixture.debugElement.query(By.css('input[type="password"]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid',()=> {
    expect(component.form.invalid).toBeTruthy();
  })

  it('form should be valid with corrects values',()=> {
    (<FormControl>component.form.controls['email']).setValue('example@hotmail.com');
    (<FormControl>component.form.controls['password']).setValue('123456');
    fixture.detectChanges();
    expect(component.form.valid).toBeTruthy();
  })

  it('email field validaty',()=> {
    let email:FormControl  =  component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    let erros = {};
    erros = email.errors || {};
    expect(erros['required']).toBeTruthy();

    email.setValue('teste');
    erros = email.errors || {};
    expect(erros['pattern']).toBeTruthy();
  })

  it('form should  invalid email validator ',()=> {
    (<FormControl>component.form.controls['email']).setValue('examplcom');
    (<FormControl>component.form.controls['password']).setValue('123456');
    fixture.detectChanges();
    expect((<FormControl>component.form.controls['email']).valid).toBeFalsy();
  })

  it('should disable submit button when form is invalid ', () => {
    let submitButton = fixture.debugElement.query(By.css('button'));
    expect(submitButton.nativeElement.disabled).toBeTruthy();
  });

  it('should enable submit button when form is valid ', () => {
    let email:FormControl = component.form.controls['email'];
    let password:FormControl = component.form.controls['password'];
    let submitButton = fixture.debugElement.query(By.css('button'));
    email.setValue('example@gmail.com');
    password.setValue('123456');
    fixture.detectChanges();
    expect(submitButton.nativeElement.disabled).toBeFalsy();
  });

  
});
