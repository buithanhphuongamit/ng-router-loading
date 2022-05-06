import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { NgRouterLoadingLoaderComponent } from '../components/ng-router-loading-loader/ng-router-loading-loader.component';

@Injectable({
  providedIn: 'root',
})
export class RouterLoadingService {
  containerRef!: ViewContainerRef;
  loader!: ComponentRef<NgRouterLoadingLoaderComponent>;
  constructor(
    private _factoryResolver: ComponentFactoryResolver,
    private _router: Router
  ) {}

  init(config: any) {
    this.containerRef = config.containerRef;

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoader();
      }

      if (event instanceof NavigationEnd) {
        this.hideLoader();
      }
    });
  }

  showLoader() {
    const componentFactory = this._factoryResolver.resolveComponentFactory(
      NgRouterLoadingLoaderComponent
    );
    this.loader = this.containerRef.createComponent(componentFactory, 0);
  }

  hideLoader() {
    if (this.loader) {
      this.loader.destroy();
      this.loader = null!;
    }
  }
}
