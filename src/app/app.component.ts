import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationCancel, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private startTime: number;
  private stopTime: number;
  private readonly allowedUrl = 'dashboard';
  public time: number;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkEvent(routerEvent);
    });
  }

  // private checkEvent(routerEvent : Event) : void {
  //   if (routerEvent instanceof NavigationStart) {
  //     this.startTime = Date.now();
  //   }
 
  //   else if (routerEvent instanceof NavigationEnd ||
  //            routerEvent instanceof NavigationCancel ||
  //            routerEvent instanceof NavigationError) {
  //     this.stopTime = Date.now();
  //     this.time = this.stopTime - this.startTime;
  //   }
  // }

  private checkEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      if (!routerEvent.url.includes(this.allowedUrl)) {
        this.router.navigate([this.allowedUrl]);
      }
    }
  }
}
