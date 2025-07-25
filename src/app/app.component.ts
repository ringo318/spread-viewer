import { Component } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spread CLI Sample';

  dataSource = [{ id: 1, name: '製品A' }];
  columns = [
    { ColumID: 'id', text: 'ID', width: 100, visible: true },
    { ColumID: 'name', text: '商品名', width: 200, visible: true }
  ];

  tabs = [
    { sheetName: 'タブ1', data: this.dataSource }
  ];

  onSpreadInit(spread: GC.Spread.Sheets.Workbook, index: number) {
    console.log('Spread initialized for tab', index);
  }

  addTab() {
    this.tabs.push({ sheetName: 'タブ' + (this.tabs.length + 1), data: [] });
  }
}
