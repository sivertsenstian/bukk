import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { CommonModule } from '@angular/common';
import { PodiumComponent } from './podium.component';
import { MaterialModule } from '../material.module';
import { ResultsTableComponent } from './results-table.component';

const COMPONENTS = [LoaderComponent, PodiumComponent, ResultsTableComponent];

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SharedModule {}
