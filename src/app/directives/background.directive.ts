import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 

    el.nativeElement.style.backgroundColor = 'green';
    renderer.setStyle(el.nativeElement,'backgroundColor','gray')
  }

  ngOnInit(){

  }

}
