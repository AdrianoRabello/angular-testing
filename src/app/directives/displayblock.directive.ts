import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisplayblock]'
})
export class DisplayblockDirective {

  constructor(private el:ElementRef, private render:Renderer2) { 

  }

  @HostListener('mouseover') displayBlockOnMouseOver(){
    let overElement = this.el.nativeElement.querySelector('#card-text');
    this.render.setStyle(overElement,'display','block')
  }


  @HostListener('mouseleave') displayNoneOnMouseOver(){
    let overElement = this.el.nativeElement.querySelector('#card-text');
    this.render.setStyle(overElement,'display','none')
  }

}
