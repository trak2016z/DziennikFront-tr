import {Component, ElementRef} from 'angular2/core';
import {AuthenticationService} from '../services/authentication.service'
import { User } from '../model/dziennik';
import {Router} from "angular2/src/router/router";

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.login" id="email" 
                            type="text" class="validate">
                        <label for="login">Login</label>
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
 
                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
            </div>
        </div>
        {{currentUser.password}}
    	`
})

export class LoginComponent {

    public user = new User('','',null);
    public errorMsg = '';
    private currentUser = new User('test','test',null);

    constructor(private _router: Router,
        private _authenticationService:AuthenticationService) {}

    login() {
        console.log("DUPOA")
        this.getUser();
        if(this.currentUser.password != this.user.password){
            this.errorMsg = 'fail';
        } else {
            if(this.currentUser.teacher){
                this.errorMsg = 'SUKCES + nauczyciel';
                this._router.navigate(['Teacher']);
            } else {
                this.errorMsg = 'SUKCES + uczen';
                this._router.navigate(['Student']);
            }

            //
        }
        console.log("DUPOA2222")
    }

    getUser(){
        this._authenticationService.getUser(this.user.login)
            .subscribe((data:User)=>this.currentUser = data,
                error => alert(error),
                ()=>console.log("GET NA USERA OISZEDK"))
    }
}