var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IMyService = /** @class */ (function () {
    function IMyService() {
    }
    return IMyService;
}());
function MyClassDecorator() {
    return function (target) {
        return target;
    };
}
function MyFunctionDecorator() {
    return function (target, methodName) {
        return target;
    };
}
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
var A = /** @class */ (function () {
    function A(xxx) {
    }
    A.prototype.doSomething = function (yyy) {
    };
    __decorate([
        MyFunctionDecorator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [B]),
        __metadata("design:returntype", void 0)
    ], A.prototype, "doSomething", null);
    A = __decorate([
        MyClassDecorator(),
        __metadata("design:paramtypes", [B])
    ], A);
    return A;
}());
//# sourceMappingURL=main.js.map