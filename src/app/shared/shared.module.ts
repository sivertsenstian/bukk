import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { CommonModule } from '@angular/common';
import { PodiumComponent } from './podium.component';
import { MaterialModule } from '../material.module';
import { ResultsTableComponent } from './results-table.component';
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS = [LoaderComponent, PodiumComponent, ResultsTableComponent];

@NgModule({
  imports: [AppRoutingModule, MaterialModule, CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SharedModule {}
