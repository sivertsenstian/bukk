import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { NewGameComponent } from './new-game.component';
import { MaterialModule } from '@core';
import { SharedModule } from '@modules';

@NgModule({
  imports: [MaterialModule, SharedModule],
  declarations: [GameComponent, NewGameComponent]
})
export class GameModule {}
