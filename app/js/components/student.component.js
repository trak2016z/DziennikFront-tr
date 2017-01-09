System.register(["angular2/core", "../services/authentication.service", "../services/student.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1, student_service_1;
    var any, StudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            }],
        execute: function() {
            StudentComponent = (function () {
                function StudentComponent(_authenticationService, _studentService) {
                    this._authenticationService = _authenticationService;
                    this._studentService = _studentService;
                }
                StudentComponent.prototype.ngOnInit = function () {
                    this.currentUser = this._authenticationService.getCurrentUser();
                };
                StudentComponent.prototype.getCard = function () {
                    var _this = this;
                    this._studentService.getCardByStudentID(this.currentUser.id)
                        .subscribe(function (data) { return _this.subjectWithGrades = data; }, function (error) { return alert(error); }, function () { return console.log("KARDKA PRZYSZLA  " + _this.subjectWithGrades); });
                };
                StudentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<table class=\"table\">\n  <tr>\n</tr>\n<h1>UCZENNN</h1>\n  </table>\n  <button (click)=\"getCard() \"> KARTKA Z OCENAMI</button>\n     <ul>\n      <li *ngFor=\"#subject of subjectWithGrades\">\n        <td>{{ subject.subjectName }}</td><td>{{ subject.valuesAssString}}</td>\n      </li>\n    </ul>\n\n",
                        providers: [student_service_1.StudentService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, student_service_1.StudentService])
                ], StudentComponent);
                return StudentComponent;
            }());
            exports_1("StudentComponent", StudentComponent);
        }
    }
});
//# sourceMappingURL=student.component.js.map