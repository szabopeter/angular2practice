import { Component, Input } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'scorelist',
  templateUrl: 'app/scorelist.component.html',
})
export class ScoreListComponent {
    @Input() scores = [];
} 
