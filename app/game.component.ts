import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'game',
  templateUrl: 'app/game.component.html',
})
export class GameComponent {
    @Input() name = "Jani";
    @Output() saveScore = new EventEmitter<Score>();

    goals1 : number;
    goals2 : number;
    onSubmit() : void {
        const score = {id:0, goals1:this.goals1, goals2:this.goals2}
        this.saveScore.emit(score);
    }
} 
