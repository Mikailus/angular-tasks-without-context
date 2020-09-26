import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements AfterViewChecked {
  @Input() imageSrc: string;
  @ViewChild('image') image: ElementRef<HTMLImageElement>;

  public imageWidth: number;
  public imageHeight: number;

  ngAfterViewChecked(): void {
    const image: HTMLImageElement = this.image.nativeElement;
    this.imageWidth = image.getBoundingClientRect().width;
    this.imageHeight = image.getBoundingClientRect().height;
  }
}
