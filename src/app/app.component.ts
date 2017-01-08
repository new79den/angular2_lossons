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
   
   <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
   <button (click) = "delete = true"> click me</button>
    `,
    styles: [`
        h1 {
            color: red;
        }
    `],
})
export class AppComponent {
    delete = false;
    title = "general";

    constructor(private _back: BackServices) {
        this.ser();

    }

    ser() {
        this._back.wq1()
    }
}
