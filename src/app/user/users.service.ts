import { Injectable } from '@angular/core';
import { GetUser, GetUsers, GetUserGames } from '../faker';
import { UserId } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  getById(id: UserId) {
    return GetUser(id);
  }

  getGamesForUserById(id: UserId) {
    return GetUserGames(id);
  }

  getAll() {
    return GetUsers();
  }
}
