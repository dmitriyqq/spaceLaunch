import { LaunchComponent } from "src/app/launch/launch.component";
import { RocketLaunch } from "./rocket-launch";

export class DataPoint{
    launches: RocketLaunch[];
    lon: number;
    lat: number;
    text: string;
    count: number;
    success: number;
    fail: number; 
}