import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomValueService {
  public getRandomValue(): Observable<number> {
    const value: number = Math.round(Math.random() * 100);
    return of(value);
  }
}
