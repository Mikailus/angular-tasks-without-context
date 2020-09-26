import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnMouseoverEnlarge]'
})
export class OnMouseoverEnlargeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') enlarge(): void {
    const height: number = this.el.nativeElement.getBoundingClientRect().height;
    const width: number = this.el.nativeElement.getBoundingClientRect().width;

    this.renderer.setStyle(this.el.nativeElement, 'height', `${height + 5}px`);
    this.renderer.setStyle(this.el.nativeElement, 'width', `${width + 5}px`);
  }

  @HostListener('mouseout') shrink(): void {
    const height: number = this.el.nativeElement.getBoundingClientRect().height;
    const width: number = this.el.nativeElement.getBoundingClientRect().width;

    this.renderer.setStyle(this.el.nativeElement, 'height', `${height - 5}px`);
    this.renderer.setStyle(this.el.nativeElement, 'width', `${width - 5}px`);
  }

}
