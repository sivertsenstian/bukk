import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { LichessService } from '@services';
import {
  UserActionTypes,
  VerifyLichessAccountSuccess,
  VerifyLichessAccountFailure,
  VerifyLichessAccount
} from '@actions';

@Injectable()
export class LichessEffects {
  @Effect()
  verifyUser$ = this.actions$.pipe(
    ofType(UserActionTypes.VerifyLichessAccount),
    map((action: VerifyLichessAccount) => action.payload),
    mergeMap(async username => {
      try {
        const lichessUser = await this.lichessService.getByUserName(username);
        return new VerifyLichessAccountSuccess(lichessUser);
      } catch (error) {
        return new VerifyLichessAccountFailure(error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private lichessService: LichessService
  ) {}
}
