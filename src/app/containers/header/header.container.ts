import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { IToy, IAppState } from '../../store';
import { Observable } from 'rxjs/Rx';
import { AuthActions } from '../../store/auth/auth.actions';

@Component({
  selector: 'header-container',
  templateUrl: './header.html'
})
export class HeaderContainer implements OnInit {

    public count: number;

    @select((state: IAppState) => state.toysReducer.count) public countObservable: Observable<number>;

    constructor(private authActions: AuthActions) {
    }

    ngOnInit() {
      this.countObservable.subscribe((count) => this.count = count);
    }

    goToPanier = () => {
      this.authActions.open();
    }
}
