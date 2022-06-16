import { Validators } from '@angular/forms';
import { User } from './../models/user';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By} from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';

import { InputOutputComponent } from './input-output.component';
import { exec } from 'child_process';



 /**  @tutorial input-Output   **/


// We can test inputs by just setting values on a components input properties
// we can test output by subscribing to the EventEmitters observable 



fdescribe('InputOutputComponent', () => {
  let component: InputOutputComponent;
  let fixture: ComponentFixture<InputOutputComponent>;
  let submitElment: DebugElement;
  let emailElement: DebugElement;
  let passwordElement: DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:  [InputOutputComponent],
      imports:[AngularMaterialModule,BrowserAnimationsModule]
    })

    fixture = TestBed.createComponent(InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    emailElement = fixture.debugElement.query(By.css('input[type=email]'))
    passwordElement = fixture.debugElement.query(By.css('input[type=password]'))
    submitElment = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting enabled to false diasables the submit button ', ()=> {
    component.enabled = false;
    emailElement.nativeElement.value = null;
    passwordElement.nativeElement.value = null;
    fixture.detectChanges();
    expect( (<HTMLInputElement> submitElment.nativeElement).disabled).toBeTruthy();
  })

  it('Entering email and password emits logged event ',() => {
    let user:User;
    component.loggedIn.subscribe((value) => user = value);
    emailElement.nativeElement.value = 'example@hotmail.com';
    passwordElement.nativeElement.value = '123456';
    submitElment.triggerEventHandler('click',null);
    expect(user.email).toBe('example@hotmail.com');
    expect(user.password).toBe('123456');

  }) 

  it('should enable submit button when email and password are given',() => {

    let user:User;
    component.loggedIn.subscribe( response => user = response);
    emailElement.nativeElement.value = 'adrianor.rabello@hotmail.com';
    passwordElement.nativeElement.value = '123456';
    fixture.detectChanges();
    submitElment.triggerEventHandler('click',null);
    expect(submitElment.nativeElement.disabled).toBeFalsy();
  })

});
