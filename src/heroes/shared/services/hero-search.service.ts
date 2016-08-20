/**
 * Created by rdm0509 on 8/19/16.
 */

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { Hero } from "../../../heroes";


@Injectable()
export class HeroSearchService {
    constructor(
        private http: Http) {

    }

    search(term : string): Observable<Hero[]> {
        return this.http
            .get('heroes-app/heroes/?name=${term}')
            .map((r: Response) => r.json().data as Hero[]);
    }

}
