import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'gameForm',
  templateUrl: 'app/gameForm.component.html',
})
export class GameFormComponent {
    @Input() title = "Default form title";
    @Output() saveScore = new EventEmitter<Score>();

    goals1 : number;
    goals2 : number;
    onSubmit() : void {
        const score = {id:0, goals1:this.goals1, goals2:this.goals2}
        this.saveScore.emit(score);
    }
} 
