import { Component, Input } from '@angular/core';
import { Podium } from '../models';

@Component({
  selector: 'bukk-podium',
  template: `
    <div class="container" *ngIf="podium">
      <mat-card>
        <mat-card-header>
          <div mat-card-avatar class="one">
            <mat-icon class="one">looks_one</mat-icon>
          </div>
          <mat-card-title> {{ podium?.gold?.email }}</mat-card-title>
          <mat-card-subtitle> {{ podium?.gold?.rating }} ELO</mat-card-subtitle>
          <a routerLink="/users/3">CLICKY</a>
        </mat-card-header>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <div mat-card-avatar class="two">
            <mat-icon class="two">looks_two</mat-icon>
          </div>
          <mat-card-title> {{ podium?.silver?.email }}</mat-card-title>
          <mat-card-subtitle>
            {{ podium?.silver?.rating }} ELO</mat-card-subtitle
          >
        </mat-card-header>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <div mat-card-avatar class="three">
            <mat-icon class="three">looks_3</mat-icon>
          </div>
          <mat-card-title> {{ podium?.bronze?.email }}</mat-card-title>
          <mat-card-subtitle>
            {{ podium?.bronze?.rating }} ELO</mat-card-subtitle
          >
        </mat-card-header>
      </mat-card>
    </div>
  `,
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent {
  @Input()
  podium: Podium = null;
}
