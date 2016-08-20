/**
 * Created by rdm0509 on 8/15/16.
 */

import { Routes, RouterModule } from "@angular/router";

import { HeroesListComponent } from "./+list";
import { HeroDetailComponent } from "./+detail";
import { DashboardComponent } from "./+dashboard";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesListComponent
    },
];

export const HeroesAppRouting = RouterModule.forRoot(appRoutes);