import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Match } from '../match';

@Injectable()
export class MatchRepositoryService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	getAll() : Promise<Match[]> {
		return this.http
			.get(`/api/matches`).toPromise()
			.then((response) => response.json());
	}

	add(match: Match) : Promise<Response> {
		return this.http
			.post(`/api/match`, match).toPromise();
	}
}
