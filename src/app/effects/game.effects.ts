import * as dotp from 'dot-prop-immutable-chain';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import {
  GamesActionTypes,
  LoadGamesSuccess,
  GameActionTypes,
  CreateGame,
  CreateGameSuccess,
  LoadGame,
  LoadGameSuccess,
  InitGame,
  LoadUsers,
  RedirectTo
} from '@actions';
import { GameService } from '@services';
import { Game, GameId } from '@core';

@Injectable()
export class GameEffects {
  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GamesActionTypes.LoadGames, GameActionTypes.CreateGameSuccess),
    mergeMap(async () => {
      const result = await this.gamesService.getAll(),
        games = result.docs.map(d => {
          const id = d.id,
            data = d.data();
          return dotp(data)
            .set('id', id)
            .set('white', data.white.id)
            .set('black', data.black.id)
            .set('date', data.date.toDate())
            .value();
        });
      return new LoadGamesSuccess(games);
    })
  );

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(GameActionTypes.CreateGame),
    map((action: CreateGame) => action.payload),
    mergeMap(async game => {
      const result = await this.gamesService.add(game),
        entity = await result.get(),
        newGame = dotp(entity.data())
          .set('id', entity.id)
          .value();
      return [
        new CreateGameSuccess(newGame),
        new RedirectTo(['/games', entity.id])
      ];
    }),
    mergeMap(v => v)
  );

  @Effect()
  loadGame$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadGame),
    map((action: LoadGame) => action.payload),
    mergeMap(async (gameId: GameId) => {
      const result = await this.gamesService.getById(gameId),
        data = result.data(),
        id = result.id,
        game = dotp(data)
          .set('id', id)
          .set('white', data.white.id)
          .set('black', data.black.id)
          .set('date', data.date.toDate())
          .value();
      return new LoadGameSuccess(game);
    })
  );

  @Effect()
  initGame$ = this.actions$.pipe(
    ofType(GameActionTypes.InitGame),
    map((action: InitGame) => action.payload),
    mergeMap((id: GameId) => {
      return [new LoadGame(id), new LoadUsers()];
    })
  );

  constructor(private actions$: Actions, private gamesService: GameService) {}
}
