import { Component, OnInit } from '@angular/core';
import { RandomValueService } from '../random-value.service';

@Component({
  selector: 'app-random-value-component-example',
  templateUrl: './random-value-component-example.component.html',
  styleUrls: ['./random-value-component-example.component.css']
})
export class RandomValueComponentExampleComponent implements OnInit {
  public randomValue: number;
  constructor(private randomValueService: RandomValueService) { }

  ngOnInit(): void {
    this.randomValueService.getRandomValue()
      .subscribe(v => this.randomValue = v);
  }

}
