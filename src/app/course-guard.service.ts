import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService implements CanActivate {
  private readonly forbiddenUrl = 'courses';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return !route.url[0].path.includes(this.forbiddenUrl);
  }
}
