import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy,
    AfterViewInit
} from "@angular/core";

@Component({
    selector: "fa-lifecycle",
    template: `
    <p>life Works</p>
    `
})

export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    constructor() {
    }

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
