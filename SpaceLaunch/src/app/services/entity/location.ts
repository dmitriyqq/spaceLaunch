import { Pad } from './pad';

export class Location {
    public id: number;
    public name: string;
    public countryCode: string;
    public infoURL: string;
    public pads: Pad[];
    public wikiURL: string;
}
