import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

@Component({
  selector: 'app-spread-viewer',
  templateUrl: './spread-viewer.component.html',
  styleUrls: ['./spread-viewer.component.scss']
})
export class SpreadViewerComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() columns: any[] = [];
  @Input() sheetName: string = 'Sheet1';
  @Input() spreadBackColor: string = '#ffffff';
  @Input() hostStyle: any = { width: '100%', height: '600px' };
  @Output() workbookInitialized = new EventEmitter<GC.Spread.Sheets.Workbook>();

  private spreadInstance!: GC.Spread.Sheets.Workbook;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] && this.spreadInstance) {
      this.spreadInstance.getActiveSheet().setDataSource(this.dataSource);
    }
  }

  initSpread(spread: GC.Spread.Sheets.Workbook): void {
    this.spreadInstance = spread;
    this.workbookInitialized.emit(spread);
  }
}
