/**
 * Created by rdm0509 on 8/15/16.
 */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Hero, HEROES, HeroService } from "../heroes";

// lazy loading of components will require a quoatation mark around the  component in Routes

@Component({
    selector: "my-app",
    templateUrl: "heroes-app.html",
    styleUrls: ["heroes-app.css"],
    directives: [],
})
export class HeroesAppComponent implements OnInit {
    title: string = "Tour of Heroes";
    heroes = HEROES;
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
