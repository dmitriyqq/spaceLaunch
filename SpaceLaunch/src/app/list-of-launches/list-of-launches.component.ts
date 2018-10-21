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
  @Input() countries: string[];
  @Input() filterType: number;
  @Input() year: number;


  constructor(private rocketLaunchService: RocketLaunchServiceService) { }

  rocketLaunchs: RocketLaunch[] = [];



  // ngOnInit() {

  // }

  async ngOnChanges() {
    let data;
    if (this.year != null) {
      do {
        data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100,
          this.year + '-01-01', this.year + '-12-29');
        this.rocketLaunchs = this.rocketLaunchs.concat(data.launches);
      } while (data.count === 100);
    } else {
      do {
        data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100);
        this.rocketLaunchs = this.rocketLaunchs.concat(data.launches);
      } while (data.count === 100);
    }
    this.rocketLaunchs = this.rocketLaunchs.sort();
  }
  change(id: number) {
    this.onChangedLaunchId.emit(id);
  }
}
