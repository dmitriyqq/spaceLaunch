import { Component, OnInit } from '@angular/core';
import { RocketLaunch } from './services/entity/rocket-launch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public openList = true;
  public year = 2018;
  public filter: number;
  public rocketLaunches: RocketLaunch[] = null;

  ngOnInit(): void {
  }
  onChangedYear(id: number) {
    this.rocketLaunches = null;
    this.year = id;
  }

  onChangedFilterType(filter: number) {
    this.rocketLaunches = null;
    this.filter = filter;
  }

  onselect(rocketLaunches: RocketLaunch[]) {
    this.rocketLaunches = rocketLaunches;
  }
}
