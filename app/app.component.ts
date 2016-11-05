import { Component, Input } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Match } from './match';
import { MatchRepositoryService } from './services/matchRepositoryService';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
})
export class AppComponent {
	matches: Match[] = [];
	matchRepository : MatchRepositoryService;
	nextMatchId: string;
	
	constructor(matchRepositoryService: MatchRepositoryService) {
		this.matchRepository = matchRepositoryService;
	}

	ngOnInit() {
		this.loadMatchesFromServer();
		this.generateNextMatchId();
	}

	loadMatchesFromServer() {
		this.matchRepository
			.getAll()
			.then((matchesFromServer) => this.matches = matchesFromServer);
	}

	saveMatch(match:Match) : void {
		this.matches.push(match);
		this.matchRepository.add(match)
			.then(() => {
				this.generateNextMatchId();
				this.loadMatchesFromServer();
			});
	}

	generateNextMatchId():void {
		this.nextMatchId = UUID.UUID();
	}
}
