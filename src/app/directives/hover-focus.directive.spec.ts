import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hover-focus.directive';


@Component({
  template: `<input type='text' hoverFocus>`
})
class TestHoverFocusComponent{

}

describe('HoverFocusDirective', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputElment:DebugElement;


  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusDirective,TestHoverFocusComponent]
    });

    fixture     = TestBed.createComponent(TestHoverFocusComponent);
    component   = fixture.componentInstance;
    inputElment = fixture.debugElement.query(By.css('input'));
  })

  it('should create an instance', () => {
  });

  it('should over input',()=> {
    inputElment.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(inputElment.nativeElement.style.backgroundColor).toBe('blue');

    inputElment.triggerEventHandler('mouseout',null);
    fixture.detectChanges();
    expect(inputElment.nativeElement.style.backgroundColor).toBe('inherit')


  })




});
