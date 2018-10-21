import { Component, OnInit, ViewChild } from '@angular/core';
import { Globe } from './globe';
import { RocketLaunchServiceService } from '../services/rocket-launch-service.service';
import { RocketLaunch } from '../services/entity/rocket-launch';
import { CONSTANTS } from './Constants.js';

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

  constructor(private rocketLaunchService: RocketLaunchServiceService) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  
  async ngOnInit() {
    this.placeholder = document.getElementById('placeholder');
    this.globe = new Globe(this.width, this.height, this.placeholder);
    this.globe.init();

    let year = 2018;
    let data;
    let rocketLaunchs:RocketLaunch[] = [];
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

    rocketLaunchs = rocketLaunchs.sort();
    console.log(rocketLaunchs);
    for(let launch of rocketLaunchs){
      const lat = launch.location.pads[0].latitude;
      const lon = launch.location.pads[0].longitude;
      console.log(lat, lon);
      const text = launch.name;
      this.globe.addPoint(lat, lon, text, CONSTANTS.LAUNCH);
    }
  }

}
