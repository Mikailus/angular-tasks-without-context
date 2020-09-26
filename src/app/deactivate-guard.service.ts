import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<any> {
  canDeactivate(): boolean {
    const alert = prompt('Are you sure you want to navigate? Y/N');

    const canDeactivate: boolean = alert === 'Y' || alert === 'y';
    return canDeactivate;
  }
}
