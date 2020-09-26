import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RandomValueService } from '../random-value.service';

export function isValueHigherThanRandomValidator(service: RandomValueService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ isValueHigher: boolean } | null> => {
    if (control.value === null) {
      return of(null);
    }

    return service.getRandomValue()
      .pipe(
        switchMap((value: number) => of(
          control.value >= value
            ? null
            : { isValueHigher: true }
          )
        )
      );
  };
}
