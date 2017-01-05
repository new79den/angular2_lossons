import {Component} from '@angular/core';

@Component({
    selector: 'fa-databindins',
    template: `
<article>
       <ng-content></ng-content>
</article>
    `,
    styles: [`
            article{
                border: 3px solid red;
            }
        `]
})

export class DatabindingComponent {
    constructor() {
    }
}