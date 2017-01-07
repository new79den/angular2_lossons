"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DatabindingComponent = (function () {
    function DatabindingComponent() {
        this.stringInterpolation = "stringInterpolation";
        this.number = 1;
    }
    DatabindingComponent.prototype.ontest = function () {
        return true;
    };
    DatabindingComponent.prototype.onClicked = function (value) {
        alert(value);
    };
    DatabindingComponent = __decorate([
        core_1.Component({
            selector: 'fa-databindins',
            templateUrl: 'databinding.component.html',
            styles: ["\n            article{\n                border: 3px solid red;\n                margin-bottom: 5px;\n            }\n            .greenBorder{\n            border: 2px solid green;\n            }\n            \n        "],
        }), 
        __metadata('design:paramtypes', [])
    ], DatabindingComponent);
    return DatabindingComponent;
}());
exports.DatabindingComponent = DatabindingComponent;
//# sourceMappingURL=databinding.component.js.map