import { Mission } from './mission';
import { Location } from './location';
import { Rocket } from './rocket';

export class RocketLaunch {
    public name: string;
    public windowstart: string;
    public location: Location;
    public net: string;
    public missions: Mission[];
    public rocket: Rocket;
    public vidURL: string;
}
