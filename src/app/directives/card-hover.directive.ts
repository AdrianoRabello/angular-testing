import { Directive, HostListener, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el:ElementRef, private render:Renderer2) {

   }

   @Input('ccCardHover') config:Object = {

    querySelector: '.card-text'
   }


  @HostListener('mouseover') mouseOver(){

    
    let punchElement = this.el.nativeElement.querySelector(this.config['querySelector'])
    this.render.setStyle(punchElement,'display','block')
  }

  @HostListener('mouseout') mouseout(){

    let puchElement = (<HTMLElement> this.el.nativeElement).querySelector(this.config['querySelector'])
    this.render.setStyle(puchElement,'display','none')
  }

}
