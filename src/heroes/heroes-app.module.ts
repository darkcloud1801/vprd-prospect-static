/**
 * Created by rdm0509 on 8/15/16.
 */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, XHRBackend }     from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from "angular2-in-memory-web-api";

import { VipAppModule } from "angular-vip-core";

import { HeroesAppComponent } from "./heroes-app.component";
import { HeroesAppRouting } from "./heroes-app.routing";
import { DashboardComponent } from "./+dashboard";
import { HeroDetailComponent } from "./+detail";
import { HeroEditorComponent } from "./+editor";
import { HeroesListComponent } from "./+list";
import { HeroSearchComponent } from "./+search";
import { HeroService, InMemoryDataService } from "./shared/services"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesAppRouting,
        HttpModule,
        VipAppModule
    ],
    declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroEditorComponent,
        HeroesListComponent,
        HeroSearchComponent,
        HeroesAppComponent
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
