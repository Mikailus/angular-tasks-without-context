import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgressGuardService implements CanActivate {
  private readonly forbiddenUrl = 'progress';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const canActivate: boolean = !route.url[0].path.includes(this.forbiddenUrl);

    if (!canActivate) {
      this.router.navigate(['404']);
    }

    return canActivate;
  }
}
