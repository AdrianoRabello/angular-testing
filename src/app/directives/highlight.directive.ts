import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {


  @HostBinding("style.background-color") backgroundColor: string;

  @Input('defaultColor') defaultColor = '';

  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    
   if(changes){
    console.log('default color ',changes.defaultColor.currentValue)
    this.defaultColor = changes.defaultColor.currentValue;
   }
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
