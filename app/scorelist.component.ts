import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'scorelist',
  templateUrl: 'app/scorelist.component.html',
})
export class ScorelistComponent {
    @Input() scores: Score[];
} 
