/**
 * Created by rdm0509 on 8/15/16.
 */

import { HEROES } from "../stores";
import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Hero } from "../models";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {
    private heroesUrl: string = "heroes/heroes";  // url to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]> (resolve =>
            setTimeout(() => resolve(HEROES), 2000)
        );
    }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    delete(hero: Hero): Promise<any> {
        let headers: Headers = new Headers();
        headers.append("Content-Type", "javascript/json");

        let url: string = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    save(hero: Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    private post(hero: Hero): Promise<Hero> {
        console.log(this.heroesUrl);
        let headers: Headers = new Headers({
            "Content-Type": "application/json"
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(hero: Hero): Promise<Hero> {
        let headers: Headers = new Headers({
            "Content-Type": "application/json"
        });

        let url: string = "${this.heroesUrl}/${hero.id}";

        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(() => hero)
            .catch();
    }

    private handleError(error: any): Promise<void> {
        console.error("An Error occurred", error);
        return Promise.reject(error.message || error);
    }
}

