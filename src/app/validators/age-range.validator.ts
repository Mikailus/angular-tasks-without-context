import { AbstractControl } from '@angular/forms';

export function ageRangeValidator(control: AbstractControl): { ageRange: true } | null {
  if (control.value === null) {
    return null;
  }

  const value: number = control.value;
  if (value <= 100 && value >= 18) {
    return null;
  }

  return {
    ageRange: true
  };
}
