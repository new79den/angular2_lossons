import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <app-other></app-other>
        <app-another>
            <div>
                <h2>hello</h2>
                <p>world</p>
            </div>
        </app-another>
        <app-another>
            <p>something else</p>
        </app-another>
    `,
    styles: [`
        h1 {
            color: red;
        }
    `]
})
export class AppComponent {
    title = "general";
}
