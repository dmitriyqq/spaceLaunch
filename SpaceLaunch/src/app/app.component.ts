import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public openList: boolean;
  public year: number;
  public filter: number;


  ngOnInit(): void {
    this.openList = true;
  }
  onChangedYear(id: number) {
    this.openList = true;
    this.year = id;
  }

  onChangedFilterType(filter: number) {
    this.filter = filter;
  }
}
