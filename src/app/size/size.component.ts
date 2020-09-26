import { Component, Input } from '@angular/core';
import { Size } from '../enums/size.enum';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent {
  @Input() size: Size;

  public sizes: typeof Size = Size;
}
