import * as _ from 'lodash';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Login, Logout } from '@actions';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$: Observable<any>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.user$ = this.store.select(state => state.common.currentUser);
    this.loggedIn$ = this.store.select(state => state.common.isLoggedIn);
  }

  async login() {
    this.store.dispatch(new Login());
  }

  async logout() {
    this.store.dispatch(new Logout());
  }
}
