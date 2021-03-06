/**
 * Created by rdm0509 on 8/15/16.
 */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Hero, HeroService } from "../shared";

@Component({
    selector: "my-dashboard",
    templateUrl: "dashboard.html",
    styleUrls: ["dashboard.css"],
})
export class DashboardComponent implements OnInit {
    id: any;

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(["/detail", hero.id ]);
    }
}
