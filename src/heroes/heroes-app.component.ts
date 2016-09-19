/**
 * Created by rdm0509 on 8/15/16.
 */

import { Component } from "@angular/core";

import "./shared/lib/rxjs-extensions";

@Component({
    selector: "my-app",
    templateUrl: "heroes-app.html",
    styleUrls: ["heroes-app.css"],
})

export class HeroesAppComponent {
    title: string = "Tour of Heroes";
}
