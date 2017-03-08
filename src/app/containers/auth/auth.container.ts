import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { select } from '@angular-redux/store';
import { Router } from '@angular/router';

import { AuthActions } from '../../store/auth/auth.actions';


@Component( {
    selector: 'auth-container',
    templateUrl: './auth.html'
})
export class AuthContainer {

    public user: {
        login: null,
        pass: null
    };

    @select(state => state.authReducer.opened) isOpened: Observable<boolean>;

    constructor(private authActions: AuthActions, private router: Router) {
    }

    close = () => {
        this.authActions.close();
    }

    submit = () => {
        this.router.navigate(['/basket']);
        this.close();
    }
}