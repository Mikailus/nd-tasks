import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective implements OnInit {

  @Input("appFirstDirective") fontColor: string;
  @Input() backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.fontColor);
  }

  @HostListener("mouseover") onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.backgroundColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'background-color');
  }

}
