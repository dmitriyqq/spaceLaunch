import { Component, OnInit, Input } from '@angular/core';
import { RocketLaunch } from '../services/entity/rocket-launch';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  @Input() rocketLaunch: RocketLaunch;
  public periodTime: string = null;
  constructor() { }

  ngOnInit() {
    const nowDate = Date.now();
    const startDate = Date.parse(this.rocketLaunch.net);
    if (nowDate < startDate) {

      const days = startDate - nowDate;

      let sec = Math.floor(days / 1000);
      let min = Math.floor(sec / 60);
      let hours = Math.floor(min / 60);
      const day = Math.floor(hours / 24);

      sec = Math.floor(sec % 60);
      min = Math.floor(min % 60);
      hours = Math.floor(hours % 24);
      this.periodTime = day + ' days ' + this.getTime(hours, min, sec);
    }
  }


  private getTime(hours: number, min: number, sec: number) {
    let time = '';
    if (hours > 9) {
      time += hours + ':';
    } else {
      time += '0' + hours + ':';
    }
    if (min > 9) {
      time += min + ':';
    } else {
      time += '0' + min + ':';
    }
    if (sec > 9) {
      time += sec;
    } else {
      time += '0' + sec;
    }
    return time;
  }
}
