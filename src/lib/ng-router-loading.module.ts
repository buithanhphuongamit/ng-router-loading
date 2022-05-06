import { NgRouterLoadingSpinnerComponent } from './components/ng-router-loading-spinner/ng-router-loading-spinner.component';
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { NgRouterLoadingLoaderComponent } from './components/ng-router-loading-loader/ng-router-loading-loader.component';
import { NgRouterLoadingDirective } from './directives/ng-router-loading.directive';
import { RouterLoadingService } from '../public-api';
import { ROUTER_LOADING_CONFIG } from './injections/config';
import { IRouterLoadingConfig } from './interfaces/router-loading-config';

interface IRouterLoadingOption {
  config?: Provider
}

const DEFAULT_CONFIG: IRouterLoadingConfig = {
  type: 'SPINNER',

  textVisible:true,
  textContent: 'Loading...',
  textColor: '#333',

  overlayVisible: true,
  overlayBackground: 'transparent',

  spinnerColor: '#333'
};


@NgModule({
  declarations: [
    NgRouterLoadingLoaderComponent,
    NgRouterLoadingSpinnerComponent,
    NgRouterLoadingDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => null,
      deps: [RouterLoadingService],
      multi: true
    },
    {
      provide: ROUTER_LOADING_CONFIG,
      useValue: DEFAULT_CONFIG
    }
  ],
  exports: [
    NgRouterLoadingLoaderComponent,
    NgRouterLoadingDirective
  ],
  entryComponents: [NgRouterLoadingLoaderComponent, NgRouterLoadingSpinnerComponent]
})
export class NgRouterLoadingModule {
  static forRoot(options: IRouterLoadingOption): ModuleWithProviders<NgRouterLoadingModule>{
    (options.config as any).useValue = {
      ...DEFAULT_CONFIG,
      ...(options.config as any).useValue
    };
    return {
      ngModule: NgRouterLoadingModule,
      providers: [
        options.config as Provider
      ]
    }
  }
}
