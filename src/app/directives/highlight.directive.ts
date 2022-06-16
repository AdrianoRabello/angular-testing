import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  @HostBinding("style.background-color") backgroundColor: string;

  @Input() defaultColor = '';

  constructor() { 
  }

  @HostListener('mouseover') mouseOver(){
    this.highlight(this.defaultColor);
  }

  @HostListener('mouseleave') mouseLeave(){
    this.highlight('')
  }


  private highlight(color:string){
    this.backgroundColor = color;
  }

}
