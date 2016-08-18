/**
 * Created by rdm0509 on 8/15/16.
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, XHRBackend }     from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api";
import { InMemoryDataService } from "./shared/services/in-memory-data.service";

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
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ],
    bootstrap: [ HeroesAppComponent ]
})
export class HeroesAppModule {
}
