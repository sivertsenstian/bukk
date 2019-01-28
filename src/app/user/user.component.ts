import { Component, OnInit } from '@angular/core';
import { Game, User, LOAD, UserId } from '../models';
import { Observable, from, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InitUser } from '../actions/user.actions';

@Component({
  selector: 'bukk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  loadingUser$: Observable<LOAD> = this.store.select(
    state => state.user.loading.entity
  );
  loadingGames$: Observable<LOAD> = this.store.select(
    state => state.user.loading.games
  );
  user$: Observable<User> = this.store.select(state => state.user.entity);
  games$: Observable<Game[]> = this.store.select(state => state.user.games);

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  loaded(status) {
    return status === LOAD.Success;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id')) as UserId;
      this.store.dispatch(new InitUser(id));
    });
  }
}
