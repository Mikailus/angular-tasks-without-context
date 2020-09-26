import { Component } from '@angular/core';
import { Size } from '../enums/size.enum';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent {
  public sizes: typeof Size = Size;
}
