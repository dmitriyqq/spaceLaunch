import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentFilter: string;
  filters: string[];
  countries: string[];
  tab: boolean;

  constructor() { }

  ngOnInit() {
    this.countries = ['Russia', 'USA', 'China'];
    this.tab = true;
    this.filters = ['All launches', 'Nearest launches', 'Successful launches', 'Unsuccessful launches'];
  }

  selectLaunches() {
    this.tab = true;
  }

  selectSpaceports() {
    this.tab = false;
  }

  selectFilter(filter) {
    this.currentFilter = filter;
  }

}

enum FileAccess {

}
