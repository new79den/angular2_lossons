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
require('../../public/css/styles.css');
var back_services_1 = require("./databinding/back.services");
var AppComponent = (function () {
    function AppComponent(_back) {
        this._back = _back;
        this.delete = false;
        this.title = "general";
        this.ser();
    }
    AppComponent.prototype.ser = function () {
        this._back.wq1();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n   <fa-databindins>\n     test\n   </fa-databindins>\n   \n   <h3>Life cycle</h3>\n   \n   <fa-lifecycle *ngIf=\"!delete\"></fa-lifecycle>\n   <button (click) = \"delete = true\"> click me</button>\n    ",
            styles: ["\n        h1 {\n            color: red;\n        }\n    "],
        }), 
        __metadata('design:paramtypes', [back_services_1.BackServices])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map