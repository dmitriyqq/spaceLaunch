/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RocketLaunchServiceService } from './rocket-launch-service.service';

describe('Service: RocketLaunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RocketLaunchServiceService]
    });
  });

  it('should ...', inject([RocketLaunchServiceService], (service: RocketLaunchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
