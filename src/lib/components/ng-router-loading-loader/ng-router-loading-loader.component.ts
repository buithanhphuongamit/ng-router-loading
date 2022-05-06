import { ROUTER_LOADING_CONFIG } from '../../injections/config';
import { Component, Inject, OnInit } from '@angular/core';
import { IRouterLoadingConfig } from '../../interfaces/router-loading-config';

@Component({
  selector: 'ng-router-loading-loader',
  templateUrl: './ng-router-loading-loader.component.html',
  styleUrls: ['./ng-router-loading-loader.component.scss']
})
export class NgRouterLoadingLoaderComponent implements OnInit {

  constructor(
    @Inject(ROUTER_LOADING_CONFIG) public config: IRouterLoadingConfig
  ) { }

  ngOnInit(): void {
    this.initDocumentVariables();
  }

  initDocumentVariables() {
    document.documentElement.style.setProperty('--rll-spinner-color', this.config.spinnerColor!);
    document.documentElement.style.setProperty('--rll-overlay-backgruond', this.config.overlayBackground!);
    document.documentElement.style.setProperty('--rll-text-color', this.config.textColor!);
  }

}
