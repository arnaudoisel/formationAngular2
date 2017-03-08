import { Action } from 'redux';
import { AUTH } from './auth.actions';
import { IAuthState } from '../';

export const defaultAuth: IAuthState = {
    connected: false,
    opened: false
}

export function authReducer (state: IAuthState = defaultAuth, action: Action) {

    switch(action.type) {
        case AUTH.OPEN:
            return Object.assign({}, state, { opened: true });
        case AUTH.CLOSE:
            return Object.assign({}, state, { opened: false });
        case AUTH.CONNECT:
            return Object.assign({}, state, { connected: true });
        default:
            return state;
    }
}