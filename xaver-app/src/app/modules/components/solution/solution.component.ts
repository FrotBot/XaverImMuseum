import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { Solution } from '../../../shared/models/solution';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  @Input() solution: Solution;
  @Output() selection: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(button: number): void {
    this.selection.emit(button);
  }

}
