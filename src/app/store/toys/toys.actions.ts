import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState} from '../';
import { ToysService } from '../../services/toys/toys.service';

export const TOYS = {
    GET_TOYS_START: 'GET_TOYS_START',
    GET_TOYS_SUCCESS: 'GET_TOYS_SUCCESS',
    SELECT_TOY: 'SELECT_TOY'
}

@Injectable()
export class ToysActions {
    constructor(private store: NgRedux<IAppState>, private toysService: ToysService) {
    }

    public getToys = () => {
        this.store.dispatch({
            type: TOYS.GET_TOYS_START
        });

        return this.toysService.getToys().subscribe(toys => {
            this.store.dispatch({
                type: TOYS.GET_TOYS_SUCCESS,
                toys
            });
        });
    }

    public selectToy = toy => {
        this.store.dispatch({
            type: TOYS.SELECT_TOY,
            toy
        });
    }
}