import { UsersActionTypes, LoadUsersSuccess } from '../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersActionTypes.LoadUsers),
    mergeMap(() =>
      this.usersService.getAll().then(users => new LoadUsersSuccess(users))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
