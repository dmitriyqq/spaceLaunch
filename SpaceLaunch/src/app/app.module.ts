import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YearsComponentComponent } from './years-component/years-component.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

@NgModule({
   declarations: [
      AppComponent,
      YearsComponentComponent,
      LaunchDetailsComponent
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
