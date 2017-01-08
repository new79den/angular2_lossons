import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy,
    AfterViewInit, Input
} from "@angular/core";

@Component({
    selector: "fa-lifecycle",
    template: `
    <ng-content></ng-content>
    <br>
    <h3>{{ bindable }}</h3>
    `
})

export class LifeCycleComponent implements Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    constructor() {
    }

   @Input() bindable = 1000;

    ngOnChanges() {
        this.log("ngOnChanges");
    }

    ngOnInit() {
        this.log("ngOnInit");
    }

    ngDoCheck() {
        this.log("ngDoCheck");
    }

    ngAfterContentInit() {
        this.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        this.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        this.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        this.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        this.log("ngOnDestroy");
    }

    private log(hook: string) {
        console.log(hook);
    }
}
