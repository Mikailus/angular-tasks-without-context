import { FormGroup } from '@angular/forms';

export function ageRangeValidator(group: FormGroup): { minMaxCompare: true } | null {
  const valueMin: number = group.controls.min.value;
  const valueMax: number = group.controls.max.value;

  if ( valueMin === null || valueMax === null) {
    return null;
  }

  if (valueMin <= valueMax) {
    return null;
  }

  return {
    minMaxCompare: true
  };
}
