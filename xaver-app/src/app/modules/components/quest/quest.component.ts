import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { Quest, QuestType } from '../../../shared/models/quest';
import { Description } from '../../../shared/models/description';
import { QuestStatus } from '../../../core/services/gameEngine';
import { SubmitSolutionComponent } from '../submit-solution/submit-solution.component';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  @Input() quest: Quest;
  @Input() questStatus: QuestStatus;
  @Output() selection: EventEmitter<number> = new EventEmitter();
  validSolution: number | undefined = undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  select(button: string): void {
    if (this.validSolution !== undefined) {
      this.selection.emit(this.validSolution);
    } else {
      console.log('There is no valid solution!');
      // TODO
    }
  }

  submit(): void {
    const dialogRef = this.dialog.open(SubmitSolutionComponent, {
      height: '400px',
      width: '600px',
      data: {quest: this.quest},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Submitted: ${result}`);
      const solution = this.quest.requirementCombination.getSolution(result);
      if (solution !== undefined) {
        this.validSolution = solution;
      } else {
        if (result.length > 0) {
          this.questStatus.remainingTries--;
          console.log('remaining tries: ' + this.questStatus.remainingTries);
          if (this.questStatus.remainingTries === 0) {
            // TODO
          }
        }
      }
    });
  }

  help(): void {
    const dialogRef = this.dialog.open(HelpComponent, {
      height: '400px',
      width: '600px',
      data: {quest: this.quest, status: this.questStatus},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Submitted: ${result}`);
    });
  }

  hasSolution(): boolean {
    return this.validSolution !== undefined;
  }
}
