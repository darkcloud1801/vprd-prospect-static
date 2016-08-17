/**
 * Created by rdm0509 on 8/15/16.
 */

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { HeroService, Hero } from "../shared";

@Component({
    selector: "my-hero-detail",
    templateUrl: "./hero-detail.html",
    styleUrls: ["./hero-detail.css"]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    @Output() close: EventEmitter<any> = new EventEmitter();
    id: any;
    error: any;
    navigated: boolean = false;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    save(): void {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero;
                this.goBack(hero);
            })
            .catch(error => this.error = error);
    }
    goBack(savedHero: Hero = null): void {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }
}

