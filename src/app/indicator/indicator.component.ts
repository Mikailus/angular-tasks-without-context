import { Component, Input } from '@angular/core';
import { Indicator } from '../enums/indicator.enum';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  @Input() indicator: Indicator;

  public indicators: typeof Indicator = Indicator;
}
