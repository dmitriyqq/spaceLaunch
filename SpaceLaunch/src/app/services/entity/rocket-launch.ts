import { Mission } from './mission';
import { Location } from './location';

export class RocketLaunch {
    public name: string;
    public windowstart: string;
    public location: Location;
    public missions: Mission[];
}
