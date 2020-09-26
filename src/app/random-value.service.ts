import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomValueService {
  public getRandomValue(): Observable<number> {
    const value: number = Math.round(Math.random() * 100);
    return of(value)
      .pipe(
        delay(2000)
      );
  }
}
