import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { NewGameComponent } from './game/new-game.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // { path: "", loadChildren: "./home/home.module#HomeModule" }
  // { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }

  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/new', component: NewGameComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
