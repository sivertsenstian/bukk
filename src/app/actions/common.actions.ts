import { Action } from '@ngrx/store';

export enum CommonActionTypes {
  Whoami = '[Common] Who am I',
  Login = '[Common] Login User',
  LoginSuccess = '[Common][Success] Login User',
  LoginFailure = '[Common][Failure] Login User',
  Logout = '[Common] Logout User',
  LogoutSuccess = '[Common][Success] Logout User',
  RegisterNewUser = '[Common] Register New User',
  RegisterNewUserSuccess = '[Common][Success] Register New User',
  RegisterNewUserFailure = '[Common][Failure] Register New User',
  RedirectTo = '[Common] Redirect To'
}

export class Whoami implements Action {
  readonly type = CommonActionTypes.Whoami;

  constructor() {}
}

export class RegisterNewUser implements Action {
  readonly type = CommonActionTypes.RegisterNewUser;

  constructor(public payload: any) {}
}

export class RegisterNewUserSuccess implements Action {
  readonly type = CommonActionTypes.RegisterNewUserSuccess;

  constructor(public payload: any) {}
}

export class RegisterNewUserFailure implements Action {
  readonly type = CommonActionTypes.RegisterNewUserFailure;

  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = CommonActionTypes.Login;

  constructor() {}
}

export class LoginSuccess implements Action {
  readonly type = CommonActionTypes.LoginSuccess;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = CommonActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = CommonActionTypes.Logout;

  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = CommonActionTypes.LogoutSuccess;

  constructor() {}
}

export class RedirectTo implements Action {
  readonly type = CommonActionTypes.RedirectTo;

  constructor(public payload: any[]) {}
}

export type CommonActions =
  | LoginSuccess
  | LoginFailure
  | LogoutSuccess
  | Login
  | Logout
  | RegisterNewUser
  | RegisterNewUserSuccess
  | RegisterNewUserFailure
  | RedirectTo;
