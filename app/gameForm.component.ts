import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from './match';

@Component({
  selector: 'gameForm',
  templateUrl: 'app/gameForm.component.html',
})
export class GameFormComponent {
	@Output() saveMatch = new EventEmitter<Match>();
	@Input() matchId : string;

	goals1 : number;
	goals2 : number;
	onSubmit() : void {
		const match = {id:this.matchId, goals1:this.goals1, goals2:this.goals2}
		this.saveMatch.emit(match);
	}
} 
