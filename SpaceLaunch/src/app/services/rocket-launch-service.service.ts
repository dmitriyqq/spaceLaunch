import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RocketLaunch } from './entity/rocket-launch';
import { RocketLaunchs } from './entity/rocket-launchs';

@Injectable({
  providedIn: 'root'
})
export class RocketLaunchServiceService {

  constructor(private httpClient: HttpClient) { }
  private url = 'https://launchlibrary.net/1.3/launch';
  public getRoketLaunces(mode?: string,
    id?: number,
    name?: string,
    locationId?: number,
    rocketId?: number,
    limit?: number,
    starDate?: string,
    endDate?: string): Promise<RocketLaunchs> {

    let params = new HttpParams();
    if (mode) {
      params = params.append('mode', mode);
    }
    if (id) {
      params = params.append('id', id.toString());
    }
    if (name) {
      params = params.append('name', name);
    }
    if (locationId) {
      params = params.append('locationId', locationId.toString());
    }
    if (rocketId) {
      params = params.append('rocketId', rocketId.toString());
    }
    if (limit) {
      params = params.append('limit', limit.toString());
    }
    if (starDate) {
      params = params.append('startdate', starDate);
    }
    if (endDate) {
      params = params.append('enddate', endDate);
    }

    return this.httpClient.get<RocketLaunchs>('https://launchlibrary.net/1.4/launch', { params }).toPromise();
  }
}
