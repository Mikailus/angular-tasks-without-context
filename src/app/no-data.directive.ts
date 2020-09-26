import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NoDataAvailableComponent } from './no-data-available/no-data-available.component';

@Directive({
  selector: '[appNoData]'
})
export class NoDataDirective {
  @Input('appNoData') set noData(isDataAvailable: boolean) {
    this.viewContainer.clear();

    if (isDataAvailable) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!isDataAvailable) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NoDataAvailableComponent);
      this.viewContainer.createComponent<NoDataAvailableComponent>(componentFactory);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

}
