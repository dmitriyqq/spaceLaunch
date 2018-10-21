import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-years-component',
  templateUrl: './years-component.component.html',
  styleUrls: ['./years-component.component.css']
})

export class YearsComponentComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedYear = new EventEmitter<number>();

  constructor() { }

  private years: number[] = [];
  private displayedYears: number[] = [];
  private readonly pageSize: number = 10;
  private currentPage: number;
  private isFirstPage: boolean;
  private isLastPage: boolean;
  private startYear: number;
  private endYear: number;
  public selectedYear: number;

  ngOnInit() {
    this.currentPage = 5;
    this.selectedYear = 2018;
    this.onChangedYear.emit(this.selectedYear);
    this.isFirstPage = true;
    for (let i = 1961; i <= 2031; i++) {
      this.years.push(i);
      this.fillDisplayedYears();
    }
  }

  private fillDisplayedYears() {
    this.displayedYears = [];
    this.startYear = this.currentPage * this.pageSize;
    this.endYear = (this.currentPage + 1) * this.pageSize;
    this.endYear = this.endYear >= this.years.length
      ? this.years.length - 1
      : this.endYear;

    for (let i = this.startYear; i <= this.endYear; i++) {
      this.displayedYears.push(this.years[i]);
    }
  }

  private setButtonsEnabled() {
    if (this.currentPage === 0) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
    if ((this.currentPage + 2) * this.pageSize >= this.years.length) {
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }
  }

  onBackClick() {
    if (!this.isFirstPage) {
      this.currentPage--;
      this.fillDisplayedYears();
      this.setButtonsEnabled();
    }
  }

  onNextClick() {
    if (!this.isLastPage) {
      this.currentPage++;
      this.fillDisplayedYears();
      this.setButtonsEnabled();
    }
  }

  onDateClick(year) {
    this.selectedYear = year;
    this.onChangedYear.emit(year);
  }

  onAllTimeClick() {
    this.selectedYear = null;
    this.onChangedYear.emit(null);
  }
}
