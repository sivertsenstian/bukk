import { GamesActionTypes, LoadGamesSuccess } from '../actions/games.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { GamesService } from './games.service';

@Injectable()
export class GamesEffects {
  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GamesActionTypes.LoadGames),
    mergeMap(() =>
      this.gamesService.getAll().then(games => new LoadGamesSuccess(games))
    )
  );

  constructor(private actions$: Actions, private gamesService: GamesService) {}
}
