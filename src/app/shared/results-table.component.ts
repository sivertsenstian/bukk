import { Component, Input } from '@angular/core';
import { Game, GameResult, User } from '../models';

@Component({
  selector: 'bukk-results-table',
  template: `
    <div class="container" *ngIf="games">
      <h3>{{ title }}</h3>
      <mat-table [dataSource]="games" class="mat-elevation-z8">
        <ng-container matColumnDef="date">
          <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>
          <mat-cell *matCellDef="let game">
            {{ game.date | date }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="white">
          <mat-header-cell *matHeaderCellDef> White </mat-header-cell>
          <mat-cell *matCellDef="let game">
            {{ user(game.white)?.email }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="black">
          <mat-header-cell *matHeaderCellDef> Black </mat-header-cell>
          <mat-cell *matCellDef="let game">
            {{ user(game.black)?.email }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="result">
          <mat-header-cell *matHeaderCellDef> Result </mat-header-cell>
          <mat-cell *matCellDef="let game">
            {{ result(game.result) }}
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </div>
  `
})
export class ResultsTableComponent {
  @Input()
  title: string;

  @Input()
  games: Game[] = [];

  @Input()
  users: { [key: number]: User } = {};

  displayedColumns = ['date', 'white', 'black', 'result'];

  result(r) {
    switch (r) {
      case GameResult.Black:
      case GameResult.White:
        return `${GameResult[r]} wins`;
      default:
        return GameResult[r];
    }
  }

  user(id) {
    return this.users[id] || null;
  }
}