import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy,
    AfterViewInit, Input, ViewChild
} from "@angular/core";

@Component({
    selector: "fa-lifecycle",
    template: `
    <ng-content></ng-content>
    <br>
    <h3 #boundParagraph>{{ bindable }}</h3>

    `
})

export class LifeCycleComponent implements Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    constructor() {
    }

   @Input() bindable = 1000;

    @ViewChild('boundParagraph')
    boundParagraph: HTMLElement;

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
        console.log(this.boundParagraph);
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
