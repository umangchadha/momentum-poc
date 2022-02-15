import {
  Component, ViewEncapsulation,
} from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent
} from 'ag-grid-community';
import {
  ROWDATA
} from './data.constant';

@Component({
  selector: 'app-funds-grid',
  templateUrl: './funds-grid.component.html',
  styleUrls: ['./funds-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FundsGridComponent {

  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;
  columnDefs: ColDef[] = [{
    headerName: 'Fund',
    field: 'fund',
    cellRenderer: (params: any) =>
      `<a class="table-links" title=` + params.value + `>` + params.value + `</a>`
  },
  {
    headerName: 'Pending Actions',
    field: 'pendingActions',
    cellRenderer: () =>
      `<a class="table-links"><mat-icon class="mat-icon material-icons mat-icon-no-color">assignment</mat-icon></a>`,
    filter: false
  },
  {
    headerName: 'Record Info.',
    field: 'recordInfo',
    type: 'rightAligned',
    valueFormatter: params => this.commafy(params.value)
  },
  {
    headerName: 'MTD BOOK P&L',
    field: 'mtdPnL',
    type: 'rightAligned',
    valueFormatter: params => this.commafy(params.value)
  },
  {
    headerName: 'YTD BOOK P&L',
    field: 'ytdPnL',
    type: 'rightAligned',
    valueFormatter: params => this.commafy(params.value)
  },
  {
    headerName: 'End BOOK NAV',
    field: 'endBookNav',
    type: 'rightAligned',
    valueFormatter: params => this.commafy(params.value)
  }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };
  rowData = ROWDATA;
  panelOpenState = false;
  autoSizeAll(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getAllColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }


  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll(true)
  }



  commafy(num: any) {
    let str = num.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }

  quickFilter(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }
}
