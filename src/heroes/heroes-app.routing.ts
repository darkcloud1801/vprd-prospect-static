/**
 * Created by rdm0509 on 8/15/16.
 */

import { Routes, RouterModule } from "@angular/router";

import { HeroesListComponent, HeroDetailComponent } from "../heroes"

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesListComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
]

export const HeroesAppRouting = RouterModule.forRoot(appRoutes);