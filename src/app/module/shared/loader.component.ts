import { Component, Input } from '@angular/core';
import { LOAD } from '@core';

@Component({
  selector: 'bukk-loader',
  template: `
    <div *ngIf="isBusy()" class="centered">
      <img src="/assets/loader.gif" width="50" height="50" />
      <span>loading...</span>
    </div>
  `,
  styles: [
    `
      div {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 999;
        left: 0;
        top: 200px;
      }
      span {
        font-size: 12px;
        color: saddlebrown;
        position: relative;
        left: -43px;
      }
    `
  ]
})
export class LoaderComponent {
  @Input()
  loading: LOAD = LOAD.Init;

  isBusy() {
    return this.loading === LOAD.Busy;
  }
}
