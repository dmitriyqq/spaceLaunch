import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { RocketLaunchServiceService } from '../services/rocket-launch-service.service';
import { RocketLaunch } from '../services/entity/rocket-launch';
import { RocketLaunchs } from '../services/entity/rocket-launchs';

@Component({
  selector: 'app-list-of-launches',
  templateUrl: './list-of-launches.component.html',
  styleUrls: ['./list-of-launches.component.css']
})
export class ListOfLaunchesComponent implements OnInit {

  constructor(private rocketLaunchService: RocketLaunchServiceService) { }

  govno: RocketLaunch[];

  ngOnInit() {
    this.rocketLaunchService.getRoketLaunces('verbose').then((data: RocketLaunchs) => {
      this.govno = data.launches;
    });
  }
}
