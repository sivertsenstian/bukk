import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { GamesService } from './games.service';
import {
  GameActionTypes,
  LoadGameSuccess,
  LoadGame,
  InitGame
} from '../actions/game.actions';
import { GameId } from '../models';
import { LoadUsers } from '../actions/users.actions';

@Injectable()
export class GameEffects {
  @Effect()
  loadGame$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadGame),
    map((action: LoadGame) => action.payload),
    mergeMap((id: GameId) =>
      this.gamesService.getById(id).then(game => new LoadGameSuccess(game))
    )
  );

  @Effect()
  initGame$ = this.actions$.pipe(
    ofType(GameActionTypes.InitGame),
    map((action: InitGame) => action.payload),
    mergeMap((id: GameId) => {
      return [new LoadGame(id), new LoadUsers()];
    })
  );

  constructor(private actions$: Actions, private gamesService: GamesService) {}
}
