import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFireAuth) {}

  async canActivate() {
    const user = this.af.auth.currentUser;
    return !_.isNil(user);
  }
}
