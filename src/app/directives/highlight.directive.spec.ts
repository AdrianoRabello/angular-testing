import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, OnChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<input type='text' appHighlight='asd'>`
})
class TestHightLightComponent{

}

describe('HighlightDirective', () => {

  let component: TestHightLightComponent;
  let fixture: ComponentFixture<TestHightLightComponent>; 
  let element:DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule( {
      declarations:[HighlightDirective,TestHightLightComponent] ,
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    });


    fixture = TestBed.createComponent(TestHightLightComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('input')); 
    fixture.detectChanges(); // initial binding
  })

  it('should create an instance asdasd', () => {
    // const h2 =  fixture.debugElement.query(By.css('input'));
    // h2.triggerEventHandler('mouseover',null);
    // fixture.detectChanges();
    // const bgColor = h2.nativeElement.style.backgroundColor;
    // expect(bgColor).toBe('asd');
  });
});
