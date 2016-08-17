/**
 * Created by rdm0509 on 8/15/16.
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { HeroesAppComponent, HeroesAppRouting, HeroesListComponent, HeroService, HeroDetailComponent, DashboardComponent }   from '../heroes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesAppRouting,
        HttpModule

    ],
    declarations: [
        HeroesAppComponent,
        HeroesListComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ HeroesAppComponent ]
})
export class HeroesAppModule {
}
