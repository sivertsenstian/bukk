import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDividerModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDividerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
