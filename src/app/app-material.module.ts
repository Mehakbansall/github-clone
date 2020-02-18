import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatDividerModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatExpansionModule,
      MatTableModule
  ],
  exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatDividerModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatTableModule
  ]
})

export class AppMaterialModule { }
