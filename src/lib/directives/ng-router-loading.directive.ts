import { RouterLoadingService } from '../services/ng-router-loading.service';
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ng-router-loading]'
})
export class NgRouterLoadingDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private _routerLoading: RouterLoadingService
  ) {
  }

  ngOnInit(): void {
    this._routerLoading.init({
      containerRef: this.viewContainerRef,
    });
  }

}
