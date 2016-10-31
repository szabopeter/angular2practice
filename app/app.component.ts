import { Component, Input } from '@angular/core';
import { Score } from './score';
import { ScoreRepositoryService } from './services/scoreRepositoryService';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
})
export class AppComponent {
	scores: Score[] = [];
	scoreRepository : ScoreRepositoryService;
	
	constructor(scoreRepositoryService: ScoreRepositoryService) {
		this.scoreRepository = scoreRepositoryService;
	}

	ngOnInit() {
		this.loadScoresFromServer();
	}

	loadScoresFromServer() {
		this.scoreRepository
			.getAll()
			.then((scoresFromServer) => this.scores = scoresFromServer);
	}

	saveScore(score:Score) : void {
		this.scores.push(score);
		this.scoreRepository.add(score)
			.then(this.loadScoresFromServer);
	}
}
