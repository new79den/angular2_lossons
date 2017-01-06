import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component'
import {BackServices} from "./databinding/back.services";
import {PropertyBindComponent} from "./databinding/proprerty-bind.componet";
import {EventBindingComponent} from "./databinding/event-binding.component";
import {twoWayBinding} from "./databinding/two-way-binding.component";

@NgModule({
    imports: [
        BrowserModule


    ],
    declarations: [
        AppComponent,
        DatabindingComponent,
        PropertyBindComponent,
        EventBindingComponent,
        twoWayBinding
    ],
    bootstrap: [ AppComponent ],
    providers: [ BackServices]
})
export class AppModule { }
