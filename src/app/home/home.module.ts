import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [MaterialModule, SharedModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
