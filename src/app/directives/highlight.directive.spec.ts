import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<input type='text' appHighlight defaultColor="asd">`
})
class TestHightLightComponent{

  color = 'asd'
}

describe('HighlightDirective', () => {

  let component: TestHightLightComponent;
  let fixture: ComponentFixture<TestHightLightComponent>; 
  let element:DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule( {
      declarations:[HighlightDirective,TestHightLightComponent] 
    })

    fixture = TestBed.createComponent(TestHightLightComponent);
    component = fixture.componentInstance;
    
    element = fixture.debugElement.query(By.css('input')); 
  })

  // it('should create an instance asdasd', () => {

  //   element.triggerEventHandler('mouseover',null);
  //   fixture.detectChanges();
  //   expect(element.nativeElement.style.backgroundColor).toBe('')
  // });
});
