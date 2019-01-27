type Id = number;

export type UserId = Id;
export type GameId = Id;
export type Email = string;
export enum GameResult {
  White = 0,
  Black = 1,
  Draw = 2,
  TBD = 3
}

export enum LOAD {
  Init,
  Busy,
  Success,
  Failure
}

export enum GameType {
  Bullet = 0,
  Blitz = 1,
  Rapid = 2,
  Classic = 3,
  Correspondence = 4
}

export interface User {
  id: UserId;
  email: Email;
  lichessAccount: Email;
  rating: number;
}

export interface Game {
  id: GameId;
  date: Date;
  white: UserId;
  black: UserId;
  result: GameResult;
  online: boolean;
  type: GameType;
}

export interface Podium {
  gold: User | null;
  silver: User | null;
  bronze: User | null;
}
