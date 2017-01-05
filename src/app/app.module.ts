import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component'
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        DatabindingComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
