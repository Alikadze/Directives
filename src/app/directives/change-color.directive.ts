import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective implements OnInit{
 //elementRef: ElementRef

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    ){
    this.elementRef = elementRef
  }

  ngOnInit(): void {
    //this.elementRef.nativeElement.style.backgroundColor = 'Yellow';
    this.renderer.setStyle(this.elementRef, 'backgroundColor', 'green')
  }

}
