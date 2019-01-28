import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [MaterialModule, SharedModule],
  declarations: [UserComponent]
})
export class UserModule {}
