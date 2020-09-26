import { AbstractControl } from '@angular/forms';

export function notNullValidator(control: AbstractControl): { notNull: true } | null {
  if (control.value === null) {
    return null;
  }

  const trimmedValue: string = control.value.trim();
  if (trimmedValue) {
    return null;
  }

  return {
    notNull: true
  };
}
