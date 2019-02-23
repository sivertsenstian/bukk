type Id = string;

export type UserId = Id | null;
export type GameId = Id | null;
export type Email = string | null;
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

export type User = {
  id: UserId;
  avatar?: string;
  email: Email;
  lichessAccount: Email;
  rating: number;
};

export type Game = {
  id?: GameId;
  date: Date;
  white: UserId;
  black: UserId;
  result: GameResult;
  online: boolean;
  type: GameType;
};

export type Podium = {
  gold: User | null;
  silver: User | null;
  bronze: User | null;
};
