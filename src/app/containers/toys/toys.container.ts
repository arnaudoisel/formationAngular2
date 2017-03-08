import { Component, OnInit } from '@angular/core';
import { ToysActions } from './../../store/toys/toys.actions';
import { Observable } from 'rxjs/Rx';
import { select } from '@angular-redux/store';
import { IToy, IAppState } from '../../store';

@Component({
  selector: 'toys-container',
  templateUrl: './toys.html'
})
export class ToysContainer implements OnInit {

    @select((state: IAppState) => state.toysReducer.toys) public toys: Observable<IToy[]>;

    constructor(private toysActions: ToysActions) {
    }

    ngOnInit() {
        this.toysActions.getToys();
    }

    public onToySelected = (toy: IToy) => {
        this.toysActions.selectToy(toy);
    }
}
