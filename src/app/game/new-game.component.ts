import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Game, GameResult, GameType } from '../models';
import { Store } from '@ngrx/store';
import { NewGame } from '../actions/game.actions';
import { LoadUsers } from '../actions/users.actions';
import * as _ from 'lodash';

@Component({
  selector: 'bukk-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  RESULT: GameResult;
  GAME_TYPE: GameType;
  game: Game;
  users: User[];
  users$: Observable<User[]> = this.store.select(state => state.users.entities);
  game$: Observable<Game> = this.store.select(state => state.game.entity);

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new NewGame());

    this.game$.subscribe(res => {
      this.game = res;
    });

    this.users$.subscribe(users => {
      this.users = _.values(users);
    });
  }
}
