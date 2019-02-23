import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core';
import {
  HomeComponent,
  GameComponent,
  NewGameComponent,
  UserComponent
} from '@modules';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games/new', component: NewGameComponent, canActivate: [AuthGuard] },
  { path: 'games/:id', component: GameComponent },
  { path: 'users/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
