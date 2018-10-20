import { Component, OnInit, Input } from '@angular/core';
import { RocketLaunchServiceService } from '../services/rocket-launch-service.service';
import { RocketLaunchs } from '../services/entity/rocket-launchs';
import { RocketLaunch } from '../services/entity/rocket-launch';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  @Input() launchId: number;

  private rocketLaunch: RocketLaunch;

  constructor(private rocketLaunchService: RocketLaunchServiceService) {
  }

  ngOnInit() {
    this.launchId = 1012;
    this.rocketLaunchService.getRoketLaunces('verbose', this.launchId)
      .then((data: RocketLaunchs) => {
        this.rocketLaunch = data.launches[0];
      });
  }

}
