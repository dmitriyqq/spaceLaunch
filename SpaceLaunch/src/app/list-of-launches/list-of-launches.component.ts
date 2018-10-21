import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { RocketLaunchServiceService } from '../services/rocket-launch-service.service';
import { RocketLaunch } from '../services/entity/rocket-launch';
import { RocketLaunchs } from '../services/entity/rocket-launchs';

@Component({
  selector: 'app-list-of-launches',
  templateUrl: './list-of-launches.component.html',
  styleUrls: ['./list-of-launches.component.css']
})
export class ListOfLaunchesComponent implements OnChanges {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedLaunchId = new EventEmitter<number>();
  @Input() filterType: number;
  @Input() year: number;

  public loading = false;

  constructor(private rocketLaunchService: RocketLaunchServiceService) { }

  @Input() rocketLaunchesInput: RocketLaunch[];
  rocketLaunchs: RocketLaunch[] = [];

  async ngOnChanges() {
    if (!this.rocketLaunchesInput) {
      let data;
      let offset = 0;
      let rocketLaunchs = [];
      let loading = true;
      if (this.filterType === 0) {
        do {
          data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100, null, null, offset);
          rocketLaunchs = rocketLaunchs.concat(data.launches);
          offset += data.count;
        } while (data.count === 100);
      }
      if (this.filterType === 1) {
        do {
          data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100,
            `${new Date().getFullYear}-${new Date().getMonth}-${new Date().getDay()}`, null, offset);
          rocketLaunchs = rocketLaunchs.concat(data.launches);
          offset += data.count;
        } while (data.count === 100);
      }
      if (this.year != null) {
        do {
          data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100,
            this.year + '-01-01', this.year + '-12-31', offset);
          rocketLaunchs = rocketLaunchs.concat(data.launches);
          offset += data.count;
        } while (data.count === 100);
      }
      if (this.filterType === 2) {
        rocketLaunchs = rocketLaunchs.filter(el => el.status === 3);
      }
      if (this.filterType === 3) {
        rocketLaunchs = rocketLaunchs.filter(el => el.status === 4);
      }
      this.rocketLaunchs = rocketLaunchs;
      this.loading = false;
    } else {
      this.rocketLaunchs = this.rocketLaunchesInput;
    }
  }

  change(id: number) {
    this.onChangedLaunchId.emit(id);
    this.rocketLaunchesInput = null;
  }
}
