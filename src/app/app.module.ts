import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component'
import {BackServices} from "./databinding/back.services";
@NgModule({
    imports: [
        BrowserModule


    ],
    declarations: [
        AppComponent,
        DatabindingComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ BackServices]
})
export class AppModule { }
