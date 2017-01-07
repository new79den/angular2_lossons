import {Component} from "@angular/core";

@Component({
    selector: 'two-way-binding',
    template: `
        <input type="text" > 
        <input type="text" value="{{ person.name }}"> 
    `
})

export class TwoWayBinding {
    person = {
        name: "Denis",
        age: 29
    }
}
