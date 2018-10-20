import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfLaunchesComponent } from './list-of-launches/list-of-launches.component';

@NgModule({
   declarations: [
      AppComponent,
      ListOfLaunchesComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
