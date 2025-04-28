import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'inicio', loadComponent: () => import('./users/list/list.component')},
    {path: 'usuario/:id', loadComponent : () => import('./users/user/user.component')},
    {path: '**', redirectTo: 'inicio'}
];
