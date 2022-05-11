import { ROUTER_LOADING_CONFIG } from '../../injections/config';
import { Component, OnInit, Inject } from '@angular/core';
import { IRouterLoadingConfig } from '../../interfaces/router-loading-config';

@Component({
  selector: '[ng-router-loading-spinner]',
  templateUrl: './ng-router-loading-spinner.component.html',
  styleUrls: ['./ng-router-loading-spinner.component.scss']
})
export class NgRouterLoadingSpinnerComponent implements OnInit {
  ngClass: any = {};
  ngStyle: any = {};
  constructor(@Inject(ROUTER_LOADING_CONFIG) public config: IRouterLoadingConfig) { }

  ngOnInit(): void {
    this.ngClass = {
      ["no-overlay"]: !this.config.overlayVisible,
    };
  }



}
