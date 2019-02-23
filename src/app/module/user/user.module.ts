import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { MaterialModule } from '@core';
import { SharedModule } from '@modules';

@NgModule({
  imports: [MaterialModule, SharedModule],
  declarations: [UserComponent]
})
export class UserModule {}
