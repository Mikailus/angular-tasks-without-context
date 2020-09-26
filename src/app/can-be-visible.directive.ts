import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Directive({
  selector: '[appCanBeVisible]'
})
export class CanBeVisibleDirective {
  @Input() set appCanBeVisible(v: void) {
    this.viewContainer.clear();

    if (this.authServiceService.canBeVisible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authServiceService: AuthServiceService
  ) {}

}
