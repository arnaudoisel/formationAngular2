import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from './components/components.module';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderContainer } from './containers/header/header.container';
import { ToysContainer } from './containers/toys/toys.container';
import { ToysService } from './services/toys/toys.service';
import { ToysActions } from './store/toys/toys.actions';

import { BasketContainer } from './containers/basket/basket.container';


import { AuthContainer } from './containers/auth/auth.container';
import { AuthActions } from './store/auth/auth.actions';


import { rootReducer, IAppState, defaultState } from './store/index';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainer,
    ToysContainer,
    AuthContainer,
    BasketContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToysService, ToysActions, AuthActions],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, defaultState, [ ]);
    }
 }
