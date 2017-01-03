import { Component } from '@angular/core';

@Component({
    selector: 'app-another',
    template: `
       <article>
            <ng-content></ng-content>
        </article>
    `,
    styles: [`
        article {
            border: 2px solid red;
        }
    `]
})
export class AnotherComponent {

}