import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState} from '../';
import { ToysService } from '../../services/toys/toys.service';

export const AUTH = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    CONNECT: 'CONNECT'
}

@Injectable()
export class AuthActions {
    constructor(private store: NgRedux<IAppState>) {
    }

    public open = () => {
        this.store.dispatch({
            type: AUTH.OPEN
        });
    }

    public close = () => {
        this.store.dispatch({
            type: AUTH.CLOSE
        });
    }

    public connect = () => {
        this.store.dispatch({
            type: AUTH.CONNECT
        });
    }
}