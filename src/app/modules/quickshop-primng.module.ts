import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SpinnerModule } from 'primeng/spinner';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    DragDropModule,
    TableModule,
    TagModule,
    SplitterModule,
    CardModule,
    DividerModule,
    SpinnerModule,
    ChartModule
  ]
})
export class QuickshopPrimeNGModule { }
