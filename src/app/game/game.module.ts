import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { NewGameComponent } from './new-game.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [MaterialModule, SharedModule],
  declarations: [GameComponent, NewGameComponent]
})
export class GameModule {}
