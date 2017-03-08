import { combineReducers, Reducer } from 'redux';
import { toysReducer } from './toys/toys.reducer';
import { defaultToys } from './toys/toys.reducer';
import { defaultAuth } from './auth/auth.reducer';
import { authReducer } from './auth/auth.reducer';

export interface IToy {
    icon: string;
    price: number;
    title: string;
    selected?: boolean;
}

export interface IToysReducer {
    count: number;
    toys: IToy[];
    price: number;
}

export interface IAuthState {
    connected: boolean;
    opened: boolean;
}

export interface IAppState {
    toysReducer: IToysReducer;
    authReducer: IAuthState;
}


export const defaultState: IAppState = {
    toysReducer: defaultToys,
    authReducer: defaultAuth
};

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState> ({
    toysReducer,
    authReducer
});
