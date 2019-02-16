import * as dotp from 'dot-prop-immutable-chain';
import {
  UsersActionTypes,
  LoadUsersSuccess,
  LoadUsers
} from '../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { UsersService } from './users.service';
import { User, Game, UserId } from '../models';
import {
  UserActionTypes,
  LoadUser,
  LoadUserSuccess,
  LoadUserGamesSuccess,
  LoadUserGames,
  InitUser
} from '../actions';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.LoadUsers),
    mergeMap(async () => {
      const users = await this.usersService.getAll();
      return new LoadUsersSuccess(
        users.docs.map(d => {
          return { id: d.id, ...d.data() } as User;
        })
      );
    })
  );

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUser),
    map((action: LoadUser) => action.payload),
    mergeMap(async id => {
      const result = await this.usersService.getById(id),
        [d] = result.docs;
      return new LoadUserSuccess({ id: d.id, ...d.data() } as User);
    })
  );
  2;
  @Effect()
  loadUserGames$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUserGames),
    map((action: LoadUserGames) => action.payload),
    mergeMap(async (id: UserId) => {
      const [white, black] = await Promise.all(
          this.usersService.getAllGamesForUserById(id)
        ),
        games = white.docs
          .map(d => {
            const data = d.data();
            return dotp(data)
              .set('id', d.id)
              .set('white', data.white.id)
              .set('black', data.black.id)
              .set('date', data.date.toDate())
              .value();
          })
          .concat(
            black.docs.map(d => {
              const data = d.data();
              return dotp(data)
                .set('id', d.id)
                .set('white', data.white.id)
                .set('black', data.black.id)
                .set('date', data.date.toDate())
                .value();
            })
          ) as Game[];

      console.log('GET USER GAMES');
      console.log([white.docs, black.docs]);
      console.log(games);

      return new LoadUserGamesSuccess(games);
    })
  );

  @Effect()
  initUser$ = this.actions$.pipe(
    ofType(UserActionTypes.InitUser),
    map((action: InitUser) => action.payload),
    mergeMap((id: UserId) => {
      return [new LoadUser(id), new LoadUserGames(id), new LoadUsers()];
    })
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
