import { NgModule } from '@angular/core';
import { AppRoutingModule, MaterialModule } from '@core';
import { SharedModule } from '@modules';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [AppRoutingModule, MaterialModule, SharedModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
