import {Component} from '@angular/core';

@Component({
    selector: 'fa-databindins',
    templateUrl: 'databinding.component.html',
    styles: [`
            article{
                border: 3px solid red;
                margin-bottom: 5px;
            }
            .greenBorder{
            border: 2px solid green;
            }
            
        `]
})

export class DatabindingComponent {
    stringInterpolation = "stringInterpolation";
    number = 1;
    constructor() {
    }

    ontest(){
        return true;
    }
}