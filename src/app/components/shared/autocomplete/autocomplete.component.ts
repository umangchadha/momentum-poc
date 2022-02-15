import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { ROWDATA } from '../../funds-grid/data.constant';




@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent {
  selectedApplications: any;
  myControl = new FormControl();
  options: any = ROWDATA.map(row => row.fund);


  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: any) => option.toLowerCase().startsWith(filterValue));
  }

}
