import { GamesActionTypes, LoadGamesSuccess } from '../actions/games.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { GamesService } from './games.service';
import {
  GameActionTypes,
  CreateGame,
  CreateGameSuccess
} from '../actions/game.actions';

@Injectable()
export class GamesEffects {
  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GamesActionTypes.LoadGames, GameActionTypes.CreateGameSuccess),
    mergeMap(async () => {
      const games = await this.gamesService.getAll();
      return new LoadGamesSuccess(games);
    })
  );

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(GameActionTypes.CreateGame),
    map((action: CreateGame) => action.payload),
    mergeMap(async game => {
      const newGame = await this.gamesService.add(game);
      return new CreateGameSuccess(newGame);
    })
  );

  constructor(private actions$: Actions, private gamesService: GamesService) {}
}
