import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfLaunchesComponent } from './list-of-launches/list-of-launches.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from './launch/launch.component';
import { YearsComponentComponent } from './years-component/years-component.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { RightSideComponent } from './right-side/right-side.component';
import { EarthComponent } from './earth/earth.component';
@NgModule({
   declarations: [
      AppComponent,
      ListOfLaunchesComponent,
      LaunchComponent,
      YearsComponentComponent,
      LaunchDetailsComponent,
      RightSideComponent,
      EarthComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
