import {Component} from "@angular/core";

@Component({
    selector: 'two-way-binding',
    template: `
        <input type="text" >        
    `
})

export class twoWayBinding {
    person = {
        name: "Denis",
        age: 29
    }
}
