import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
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
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
