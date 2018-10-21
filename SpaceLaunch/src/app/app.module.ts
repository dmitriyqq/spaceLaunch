import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListOfLaunchesComponent } from './list-of-launches/list-of-launches.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from './launch/launch.component';
import { YearsComponentComponent } from './years-component/years-component.component';
import { ListOfCountriesComponent } from './list-of-countries/list-of-countries.component';
@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      LaunchComponent,
      ListOfLaunchesComponent,
      YearsComponentComponent,
      ListOfCountriesComponent
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
