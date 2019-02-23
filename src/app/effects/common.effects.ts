import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { mergeMap, take, map } from 'rxjs/operators';
import { UsersService } from '@services';
import {
  CommonActionTypes,
  LoginSuccess,
  LogoutSuccess,
  LoginFailure,
  RegisterNewUser,
  RegisterNewUserFailure,
  RegisterNewUserSuccess,
  RedirectTo,
  LoadUsers
} from '@actions';

@Injectable()
export class CommonEffects {
  @Effect()
  whoami$ = this.actions$.pipe(
    ofType(CommonActionTypes.Whoami),
    mergeMap<any, any>(async () => {
      let authUser = null;
      await this.af.user.pipe(take(1)).subscribe(result => {
        authUser = result;
      });

      if (!_.isNil(authUser)) {
        const result = await this.usersService.getByEmail(authUser.email),
          [d] = result.docs,
          user = {
            id: d.id,
            avatar: authUser.photoURL,
            ...d.data()
          };

        return new LoginSuccess({ user, token: null });
      }
      return new LoginFailure(authUser);
    })
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(CommonActionTypes.Login),
    mergeMap(async () => {
      const {
          credential: { providerId },
          user
        } = await this.af.auth.signInWithPopup(new auth.GoogleAuthProvider()),
        result = await this.usersService.getByEmail(user.email),
        [d] = result.docs;

      if (_.isNil(d)) {
        return new RegisterNewUser(user);
      } else {
        const existingUser = {
          id: d.id,
          avatar: user.photoURL,
          ...d.data()
        };
        return new LoginSuccess({ user: existingUser, token: providerId });
      }
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(CommonActionTypes.Logout),
    mergeMap(async () => {
      await this.af.auth.signOut();
      return new LogoutSuccess(); 
    })
  );

  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType(CommonActionTypes.RegisterNewUser),
    map((action: RegisterNewUser) => action.payload),
    mergeMap(async user => {
      if (user.email.endsWith('@miles.no')) {
        const result = await this.usersService.add(user.email),
          d = await result.get();
        const newUser = {
          id: d.id,
          avatar: user.photoURL,
          ...d.data()
        };
        return [
          new RegisterNewUserSuccess({ user: newUser, token: null }),
          new LoadUsers()
        ];
      }
      return [new RegisterNewUserFailure('NOT ALLOWED!')];
    }),
    mergeMap<any, any>(events => events)
  );

  @Effect({ dispatch: false })
  redirect$ = this.actions$.pipe(
    ofType(CommonActionTypes.RedirectTo),
    map((action: RedirectTo) => action.payload),
    mergeMap(commands => {
      return this.router.navigate(commands);
    })
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private af: AngularFireAuth,
    private router: Router
  ) {}
}
