import { Component, Input } from '@angular/core';
import { LOAD } from '../models';

@Component({
  selector: 'bukk-loader',
  template: `
    <div *ngIf="isBusy()" class="centered">
      <img src="/assets/loader.gif" width="50" height="50" />
    </div>
  `
})
export class LoaderComponent {
  @Input()
  loading: LOAD = LOAD.Init;

  isBusy() {
    return this.loading === LOAD.Busy;
  }
}
