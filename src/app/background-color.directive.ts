import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnChanges {
  @Input("appBackgroundColor") index: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(): void {
    if (this.index % 2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgrey');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'background-color');
    }
  }
}
