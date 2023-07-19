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
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    ChartModule,
    DropdownModule,
    ButtonModule,
    ScrollPanelModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class QuickshopPrimeNGModule { }
