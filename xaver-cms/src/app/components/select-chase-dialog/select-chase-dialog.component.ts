import {Component, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Chase, ChaseList, ChaseMetaData} from 'src/app/shared/models/chase';
import {ChaseService} from 'src/app/shared/services/chase.service';
import {deserialize, serialize} from 'typescript-json-serializer';

@Component({
  selector: 'app-select-chase-dialog',
  templateUrl: './select-chase-dialog.component.html',
  styleUrls: ['./select-chase-dialog.component.scss']
})
export class SelectChaseDialogComponent implements OnInit {
  constructor(
      private chaseService: ChaseService,
      private dialogRef: MatDialogRef<SelectChaseDialogComponent>) {}

  chaseList = new ChaseList();

  ngOnInit(): void{this.chaseService.getAllChases().subscribe(chases => {
    this.chaseList = deserialize<ChaseList>(chases, ChaseList);
    console.log(this.chaseList);
  })}

  closeDialog(): void {
    console.log('Zurück');
    this.dialogRef.close("");
  }

  chaseSelectorClicked(text: string) {
    console.log("selected: " + text);

    this.dialogRef.close(text); 
  }
}
