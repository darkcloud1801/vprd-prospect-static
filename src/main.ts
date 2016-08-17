/// <reference path="../typings/index.d.ts" />

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HeroesAppModule } from "./heroes";

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HeroesAppModule);
