import { Action } from 'redux';
import { IToysReducer } from '../';
import { TOYS } from './toys.actions';

export const defaultToys: IToysReducer = {
    count: 0,
    price: 0,
    toys: []
}

export function toysReducer (state: IToysReducer = defaultToys, action: Action) {

    switch(action.type) {
        case TOYS.GET_TOYS_START:
            return state;
        case TOYS.GET_TOYS_SUCCESS:
            return Object.assign({}, state, { toys: action['toys'] });
        case TOYS.SELECT_TOY:
            const newToys = JSON.parse(JSON.stringify(state.toys));
            newToys.map(item => {
                item.selected = item.title === action['toy']['title'] ? !item.selected : item.selected;
            })

            const nbSelected = newToys.filter(item => item.selected).length;

            return Object.assign({}, state, { toys: newToys, count: nbSelected });
        default:
            return state;
    }
}