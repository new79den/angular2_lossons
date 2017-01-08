import { Component } from '@angular/core';

import '../../public/css/styles.css';
import {BackServices} from "./databinding/back.services";
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
   <fa-databindins>
     test
   </fa-databindins>
   
   <h3>Life cycle</h3>
   
   <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
    {{test}}
</fa-lifecycle>
   <button (click) = "delete = true"> click me</button>
   <button (click) = "test = 'Chang Value'"> click to Change </button>
   <button (click) = "boundValue = 2000"> click to Change </button>
    `,
    styles: [`
        h1 {
            color: red;
            
        }
    `],
})

export class AppComponent {
    boundValue  = 1000;
    delete = false;
    test = "startingValue"
    title = "general";

    constructor(private _back: BackServices) {
        this.ser();

    }

    ser() {
        this._back.wq1()
    }
}
