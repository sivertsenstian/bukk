import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Game, GameId, GameResult } from '../models';
import { Store } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InitGame } from '../actions/game.actions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'bukk-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  RESULT: GameResult;
  game: Game;
  users: User[];
  users$: Observable<User[]> = this.store.select(state => state.users.entities);
  game$: Observable<Game> = this.store.select(state => state.game.entity);

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as GameId;
      this.store.dispatch(new InitGame(id));
    });

    this.game$.subscribe(res => {
      this.game = res;
    });

    this.users$.subscribe(users => {
      this.users = users;
    });
  }

  user(id) {
    return this.users[id] || { email: 'Unknown' };
  }

  title() {
    if (this.game) {
      const white = this.user(this.game.white).email,
        black = this.user(this.game.black).email,
        dPipe = new DatePipe('en');
      return `${white} vs. ${black} on ${dPipe.transform(this.game.date)}`;
    }
    return null;
  }
}
