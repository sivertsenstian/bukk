import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User, Podium, LOAD, Game } from '../models';
import { LoadUsers } from '../actions/users.actions';
import { LoadGames } from '../actions/games.actions';
import * as _ from 'lodash';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'bukk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn$: Observable<any> = this.store.select(state => state.common.isLoggedIn);
  users$: Observable<User[]> = this.store.select(state => state.users.entities);
  podium$: Observable<Podium> = this.store.select(state => state.users.podium);
  loading$: Observable<LOAD> = this.store.select(state => state.users.loading);
  online$: Observable<Game[]> = this.store.select(state =>
    _.chain<Game[]>(state.games.entities)
      .filter(g => g.online)
      .take(5)
      .values()
      .value()
  );
  live$: Observable<Game[]> = this.store.select(state =>
    _.chain<Game[]>(state.games.entities)
      .filter(g => !g.online)
      .take(5)
      .values()
      .value()
  );

  constructor(private store: Store<any>) {}

  loaded(status) {
    return status === LOAD.Success;
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new LoadGames());
  }
}
