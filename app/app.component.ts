import { Component, Input } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
    scores: Score[] = [];

    saveScore(score:Score) : void {
        this.scores.push(score)
        console.log(this.scores);
    }
} 
