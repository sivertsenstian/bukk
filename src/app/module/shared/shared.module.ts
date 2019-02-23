import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule, AppRoutingModule } from '@core';
import {
  PodiumComponent,
  LoaderComponent,
  ResultsTableComponent
} from '@shared';

const COMPONENTS = [LoaderComponent, PodiumComponent, ResultsTableComponent];

@NgModule({
  imports: [AppRoutingModule, MaterialModule, CommonModule, FormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SharedModule {}
