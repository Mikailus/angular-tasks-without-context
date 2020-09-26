import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appForbiddenWordsHighlight2]'
})
export class ForbiddenWordsHighlight2Directive implements OnChanges {
  @Input('appForbiddenWordsHighlight2') forbiddenWords: string[];

  constructor(private el: ElementRef<HTMLParagraphElement>, private renderer: Renderer2) {}

  ngOnChanges(): void {
    const text: string = this.el.nativeElement.innerText;
    const forbiddenWords: string[] = this.forbiddenWords
      .filter((forbiddenWord: string) => text.includes(forbiddenWord));

    const isTextWithForbiddenWords: boolean = !!forbiddenWords.length;

    if (isTextWithForbiddenWords) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}
