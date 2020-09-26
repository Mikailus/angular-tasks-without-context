import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appForbiddenWordsHighlight]'
})
export class ForbiddenWordsHighlightDirective implements OnChanges {
  @Input('appForbiddenWordsHighlight') text: string;
  @Input() forbiddenWords: string[];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    const forbiddenWords: string[] = this.forbiddenWords
      .filter((forbiddenWord: string) => this.text.includes(forbiddenWord));

    const isTextWithForbiddenWords: boolean = !!forbiddenWords.length;

    if (isTextWithForbiddenWords) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}
