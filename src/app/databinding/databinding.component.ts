import {Component} from '@angular/core';

@Component({
    selector: 'fa-databindins',
    template: `
<article>
       <ng-content></ng-content>
</article>

<article>
    {{stringInterpolation}}
    {{number}}
</article>
    `,
    styles: [`
            article{
                border: 3px solid red;
                margin-bottom: 5px;
            }
        `]
})

export class DatabindingComponent {
    stringInterpolation = "string";
    number = 1;
    constructor() {
    }
}