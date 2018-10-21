import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Globe } from './globe';
import { RocketLaunchServiceService } from '../services/rocket-launch-service.service';
import { RocketLaunch } from '../services/entity/rocket-launch';
import { CONSTANTS } from './Constants.js';
import { DataPoint } from '../services/entity/DataPoint';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  globe: Globe;
  width: number;
  height: number;
  placeholder: HTMLElement;
 @Output() onSelectLocation = new EventEmitter<RocketLaunch[]>();

  constructor(private rocketLaunchService: RocketLaunchServiceService) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  async ngOnInit() {
    this.placeholder = document.getElementById('placeholder');
    this.globe = new Globe(this.width, this.height, this.placeholder, (data: DataPoint) => {
      this.onSelectLocation.emit(data.launches);
    });
    this.globe.init();

    let year = 2018;
    let data;
    let rocketLaunchs: RocketLaunch[] = [];
    let offset = 0;
    if (year != null) {
      do {
        data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100,
          year + '-01-01', year + '-12-29', offset);
        rocketLaunchs = rocketLaunchs.concat(data.launches);
        offset += data.count;
      } while (data.count === 100);
    } else {
      do {
        data = await this.rocketLaunchService.getRoketLaunces('verbose', null, null, null, null, 100, null, null, offset);
        rocketLaunchs = rocketLaunchs.concat(data.launches);
        offset += data.count;
      } while (data.count === 100);
    }

    const dataPoints: DataPoint[] = [];
    const MIN_DELTA = 1.0;
    rocketLaunchs.map(launch => {
      if (launch.location.pads.length) {
        const lat = launch.location.pads[0].latitude;
        const lon = launch.location.pads[0].longitude;
        const success = launch.status == 3 ? 1 : 0;
        const fail = launch.status == 4 ? 1 : 0;


        for (let point of dataPoints) {
          if (Math.abs(point.lat - lat) < MIN_DELTA && Math.abs(point.lon - lon) < MIN_DELTA) {
            point.launches.push(launch);
            point.count++;
            point.success+=success;
            point.fail+=fail;
            return;
          }
        }

        dataPoints.push(<DataPoint>{
          count: 1,
          launches: [launch],
          lat, lon,
          text: launch.rocket.name,
          fail, success,
        });
      }
    });

    dataPoints.map(dp => {
      this.globe.addPoints(dp)
    });
  }
}
