import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfLaunchesComponent } from './list-of-launches/list-of-launches.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from './launch/launch.component';
@NgModule({
   declarations: [
      AppComponent,
      ListOfLaunchesComponent,
      LaunchComponent
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
