import { Component, Input} from "@angular/core";

@Component({
    selector: 'fa-property-bind',
    template: `
        <p>{{result}}</p>
    `,
})

export class PropertyBindComponent{
   @Input() result: number = 0;

}