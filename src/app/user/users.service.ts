import { Injectable } from '@angular/core';
import { GetUser, GetUsers } from '../faker';
import { UserId } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}

  getById(id: UserId) {
    return GetUser(id);
  }

  getAll() {
    return GetUsers();
  }
}
