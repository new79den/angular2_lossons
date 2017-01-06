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
var core_1 = require("@angular/core");
var twoWayBinding = (function () {
    function twoWayBinding() {
        this.person = {
            name: "Denis",
            age: 29
        };
    }
    twoWayBinding = __decorate([
        core_1.Component({
            selector: 'two-way-binding',
            template: "\n        <input type=\"text\" >        \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], twoWayBinding);
    return twoWayBinding;
}());
exports.twoWayBinding = twoWayBinding;
//# sourceMappingURL=two-way-binding.component.js.map