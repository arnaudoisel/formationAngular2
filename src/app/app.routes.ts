import { Routes } from '@angular/router';
import { ToysContainer } from './containers/toys/toys.container';
import { BasketContainer } from './containers/basket/basket.container';

export const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/toys',
        pathMatch: 'full'
    },
    {
        path: 'toys',
        component: ToysContainer
    },
    {
        path: 'basket',
        component: BasketContainer
    },
    {
        path: '**',
        redirectTo: '/toys'
    }
];
