import { Component, Input } from '@angular/core';
import { Game, GameResult, User } from '@core';

@Component({
  selector: 'bukk-results-table',
  template: `
    <div class="container">
      <div class="mat-title">{{ title }}</div>
      <div [class.mat-elevation-z8]="games.length === 0">
        <mat-table [dataSource]="games" class="mat-elevation-z8">
          <ng-container matColumnDef="date">
            <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>
            <mat-cell *matCellDef="let game">
              {{ game.date | date }}
            </mat-cell>
          </ng-container>

          <ng-container matColumnDef="white">
            <mat-header-cell *matHeaderCellDef> White </mat-header-cell>
            <mat-cell
              *matCellDef="let game"
              [routerLink]="['/users', user(game.white)?.id]"
            >
              {{ user(game.white)?.email }}
            </mat-cell>
          </ng-container>

          <ng-container matColumnDef="black">
            <mat-header-cell *matHeaderCellDef> Black </mat-header-cell>
            <mat-cell
              *matCellDef="let game"
              [routerLink]="['/users', user(game.black)?.id]"
            >
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
          <mat-row
            *matRowDef="let row; columns: displayedColumns"
            [routerLink]="['/games', row.id]"
          ></mat-row>
        </mat-table>
        <mat-card
          *ngIf="games.length === 0"
          style="border-radius:0px;text-align:center;"
        >
          No recent games :(</mat-card
        >
      </div>
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
    return this.users[id] || 'Unknown';
  }
}
