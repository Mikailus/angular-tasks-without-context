import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
  public seconds = 0;
  private counterIntervalId: number;

  ngOnInit(): void {
    const timeIntervalInMilliseconds = 1000;
    this.counterIntervalId = setInterval(() => {
      this.seconds++;
    }, timeIntervalInMilliseconds);
  }

  ngOnDestroy(): void {
    clearInterval(this.counterIntervalId);
  }
}
