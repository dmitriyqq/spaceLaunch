import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YearsComponentComponent } from './years-component/years-component.component';

@NgModule({
    declarations: [
        AppComponent,
        YearsComponentComponent
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
