import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent implements OnInit, OnDestroy {
  public seconds = 0;
  public seconds$: Observable<number>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    const timeIntervalInMilliseconds = 1000;
    interval(timeIntervalInMilliseconds)
      .pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(() => {
        this.seconds++;
      });

    this.seconds$ = interval(timeIntervalInMilliseconds);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
