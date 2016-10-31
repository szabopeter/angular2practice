import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Score } from '../score';

@Injectable()
export class ScoreRepositoryService {
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	getAll() : Promise<Score[]> {
		return this.http
			.get(`/api/scores`).toPromise()
			.then((response) => response.json());
	}

	add(score: Score) : Promise<Response> {
		return this.http
			.post(`/api/score`, score).toPromise();
	}
}
