import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { SpreadViewerComponent } from './spread-viewer.component';

@NgModule({
  declarations: [SpreadViewerComponent],
  imports: [CommonModule, FormsModule, SpreadSheetsModule],
  exports: [SpreadViewerComponent]
})
export class SpreadViewerModule {}
