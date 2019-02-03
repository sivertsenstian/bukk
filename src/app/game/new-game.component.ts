import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Game, GameResult, GameType } from '../models';
import { Store } from '@ngrx/store';
import { NewGame, UpdateGame, CreateGame } from '../actions/game.actions';
import { LoadUsers } from '../actions/users.actions';
import * as _ from 'lodash';

@Component({
  selector: 'bukk-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  RESULT;
  TYPE;
  game: Game;
  users: User[];
  users$: Observable<User[]>;
  game$: Observable<Game>;

  constructor(private store: Store<any>) {
    this.RESULT = GameResult;
    this.TYPE = GameType;
    this.users$ = this.store.select(state => state.users.entities);
    this.game$ = this.store.select(state => state.game.entity);
  }

  ngOnInit(): void {
    this.onLoad();

    this.game$.subscribe(res => {
      this.game = res;
    });

    this.users$.subscribe(users => {
      this.users = _.values(users);
    });
  }

  onLoad(): void {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new NewGame());
  }

  update(path, event) {
    const value = !_.isNil(event.value) ? event.value : event.checked;
    this.store.dispatch(new UpdateGame([path, value]));
  }

  add(game) {
    this.store.dispatch(new CreateGame(game));
  }
}
