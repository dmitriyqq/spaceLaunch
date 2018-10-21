import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedFilterType = new EventEmitter<number>();
  currentFilter: number;
  filters: string[];
  countries: string[];
  tab: boolean;
  countrCodes: string[];

  constructor() { }

  ngOnInit() {
    this.countries = ['Russia', 'USA', 'China', 'Japan', 'South Korea'];
    this.countrCodes = ['RUS', 'USA', 'CHN', 'JPN', 'KOR'];
    this.tab = true;
    this.filters = ['All launches', 'Nearest launches', 'Successful launches', 'Unsuccessful launches'];

  }

  selectFilter(filter) {
    this.currentFilter = this.filters.indexOf(filter);
    this.onChangedFilterType.emit(this.currentFilter);
  }

}

enum Filters {
  All = 0,
  Nearest = 1,
  Successful = 2,
  Unsuccessful = 3
}
