/**
 * Created by rdm0509 on 8/15/16.
 */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroService, HEROES } from "../heroes";

// lazy loading of components will require a quoatation mark around the  component in Routes

@Component({
    selector: "my-app",
    templateUrl: "./heroes-app.html",
    styleUrls: ["./heroes-app.css"],
    directives: [],
    providers: [
        HeroService
    ]
})
export class HeroesAppComponent implements OnInit {
    title: string = "Tour of Heroes";
    heroes = HEROES;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.navigate(["/dashboard"]);
    }

}
