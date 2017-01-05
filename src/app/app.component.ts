import { Component } from '@angular/core';

import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
   <fa-databindins>
        <p>1</p>
    </fa-databindins>
    
    <fa-databindins>
        <p>2</p>
    </fa-databindins>
    
    <fa-databindins>
        <p>3</p>
    </fa-databindins>

    `,
    styles: [`
        h1 {
            color: red;
        }
       
    `],

})
export class AppComponent {
    title = "general";
}
