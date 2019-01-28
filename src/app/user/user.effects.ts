import {
  UserActionTypes,
  LoadUserSuccess,
  LoadUserGamesSuccess,
  LoadUserGames,
  LoadUser,
  InitUser
} from '../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { UsersService } from './users.service';
import { UserId } from '../models';

@Injectable()
export class UserEffects {
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUser),
    map((action: LoadUser) => action.payload),
    mergeMap(id =>
      this.usersService.getById(id).then(user => new LoadUserSuccess(user))
    )
  );

  @Effect()
  loadUserGames$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUserGames),
    map((action: LoadUserGames) => action.payload),
    mergeMap(id =>
      this.usersService
        .getGamesForUserById(id)
        .then(games => new LoadUserGamesSuccess(games))
    )
  );

  @Effect()
  initUser$ = this.actions$.pipe(
    ofType(UserActionTypes.InitUser),
    map((action: InitUser) => action.payload),
    mergeMap((id: UserId) => {
      return [new LoadUser(id), new LoadUserGames(id)];
    })
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
