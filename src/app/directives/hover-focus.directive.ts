import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverFocus]'
})
export class HoverFocusDirective {


  @HostBinding("style.background-color") backgroundColor: string;

  @HostListener("mouseover") onHover(){
    this.backgroundColor = 'blue'
  }

  @HostListener("mouseout") onLeave(){
    this.backgroundColor = 'inherit';
  }

}
